using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace server.model
{
    public partial class lifeplus_dbContext : DbContext
    {
        public lifeplus_dbContext()
        {
        }

        public lifeplus_dbContext(DbContextOptions<lifeplus_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<AppointmentStatus> AppointmentStatuses { get; set; }
        public virtual DbSet<ContactU> ContactUs { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<DoctorAvailability> DoctorAvailabilities { get; set; }
        public virtual DbSet<DoctorSpecialization> DoctorSpecializations { get; set; }
        public virtual DbSet<PatientDetail> PatientDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseNpgsql("host=localhost;database=lifeplus_db;user id=postgres;password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "English_United States.1252");

            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.ToTable("appointment");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.DoctorId).HasColumnName("doctor_id");

                entity.Property(e => e.PatientId).HasColumnName("patient_id");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Appointments)
                    .HasForeignKey(d => d.DoctorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("appointment_doctor_id_fkey");
            });

            modelBuilder.Entity<AppointmentStatus>(entity =>
            {
                entity.ToTable("appointment_status");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(10)
                    .HasColumnName("created_by");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasColumnName("created_date");

                entity.Property(e => e.Status)
                    .HasMaxLength(15)
                    .HasColumnName("status");

                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(10)
                    .HasColumnName("updated_by");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("date")
                    .HasColumnName("updated_date");
            });

            modelBuilder.Entity<ContactU>(entity =>
            {
                entity.HasKey(e => e.ContactId)
                    .HasName("contact_us_pkey");

                entity.ToTable("contact_us");

                entity.Property(e => e.ContactId)
                    .HasColumnName("contact_id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email_id");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(15)
                    .HasColumnName("firstname");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(15)
                    .HasColumnName("lastname");

                entity.Property(e => e.PComment)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("p_comment");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("doctors");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.EmailId)
                    .HasMaxLength(30)
                    .HasColumnName("email_id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .HasColumnName("last_name");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(15)
                    .HasColumnName("phone_no");

                entity.Property(e => e.SpecializationId).HasColumnName("specialization_id");

                entity.HasOne(d => d.Specialization)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.SpecializationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("doctors_specialization_id_fkey");
            });

            modelBuilder.Entity<DoctorAvailability>(entity =>
            {
                entity.ToTable("doctor_availability");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(10)
                    .HasColumnName("created_by");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasColumnName("created_date");

                entity.Property(e => e.DayInWeek)
                    .HasMaxLength(15)
                    .HasColumnName("day_in_week");

                entity.Property(e => e.DoctorId).HasColumnName("doctor_id");

                entity.Property(e => e.EndingTime).HasColumnName("ending_time");

                entity.Property(e => e.MinutePerPatient).HasColumnName("minute_per_patient");

                entity.Property(e => e.OpenForDay)
                    .HasMaxLength(5)
                    .HasColumnName("open_for_day");

                entity.Property(e => e.StartingTime).HasColumnName("starting_time");

                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(10)
                    .HasColumnName("updated_by");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("date")
                    .HasColumnName("updated_date");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.DoctorAvailabilities)
                    .HasForeignKey(d => d.DoctorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("doctor_availability_doctor_id_fkey");
            });

            modelBuilder.Entity<DoctorSpecialization>(entity =>
            {
                entity.ToTable("doctor_specialization");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.SpecializationIn)
                    .HasMaxLength(30)
                    .HasColumnName("specialization_in");
            });

            modelBuilder.Entity<PatientDetail>(entity =>
            {
                entity.ToTable("patient_details");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(30)
                    .HasColumnName("email_id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .HasColumnName("first_name");

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .HasColumnName("gender");

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .HasColumnName("last_name");

                entity.Property(e => e.MedicalComplaint)
                    .HasMaxLength(70)
                    .HasColumnName("medical_complaint");

                entity.Property(e => e.PhoneNo)
                    .HasColumnType("character varying")
                    .HasColumnName("phone_no");

                entity.Property(e => e.SelectedDate)
                    .HasColumnType("date")
                    .HasColumnName("selected_date");

                entity.Property(e => e.SelectedSlot)
                    .HasMaxLength(20)
                    .HasColumnName("selected_slot");

                entity.Property(e => e.VisitingStatus)
                    .HasMaxLength(50)
                    .HasColumnName("visiting_status");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
