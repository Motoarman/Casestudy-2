using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using server.Controllers;
using server.model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System.IO;

namespace server.Tests
{
    [TestClass]
    public class ContactUsControllerTests
    {
        [TestMethod]


        public void TestPostContactUs()
        {

            //arrange
            var context = new lifeplus_dbContext();
            var controller = new ContactUsController(context);
            ContactU con = new ContactU()
            {
                Firstname = "abc",
                Lastname = "xyz",
                EmailId = "abc@gmail.com",
                PComment = "xyz"

            };

            //act

            context.ContactUs.Add(con);
            context.SaveChanges();

            var contactus = controller.GetContactUs().Result.Value;
            var result = contactus.LastOrDefault();
            Console.WriteLine(result.ContactId + " " + "Added to Contactus");

            //Assert
            Assert.IsNotNull(result, "No ContactUs data returned");
        }

        [TestMethod]
        public void TestGetContactUs()
        {
            var streamWriter = new StreamWriter("log.txt");

            //Arrange
            var context = new lifeplus_dbContext();
            var contactusABC = context.ContactUs.OrderByDescending(contact => contact.ContactId).FirstOrDefault(contact => contact.Firstname == "abc");
            streamWriter.WriteLine(contactusABC.Firstname);

            var controller = new ContactUsController(context);

            //Act
            var contactus = controller.GetContactUs().Result.Value;
            var result = contactus.LastOrDefault();

            Console.WriteLine(result.Firstname + " " + "taken from ContactU table");

            //Assert
            Assert.IsNotNull(result, "No ContactUs data returned");
            streamWriter.Close();
        }
    }
}
