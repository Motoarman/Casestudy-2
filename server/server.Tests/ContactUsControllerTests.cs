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
        public void TestGetContactUs()
        {
            var streamWriter = new StreamWriter("log.txt");

            //Arrange
            var context = new lifeplus_dbContext();
           var contactusABC = context.ContactUs.Where(contact => contact.Firstname == "arman").FirstOrDefault();
            streamWriter.WriteLine(contactusABC.Firstname);

            var controller = new ContactUsController(context);

            //Act
            var contactus = controller.GetContactUs().Result.Value;
            var result = contactus.FirstOrDefault();

          Console.WriteLine(result.Firstname + "taken from ContactU table");

            //Assert
            Assert.IsNotNull(result, "No ContactUs data returned");
            streamWriter.Close();
        }

        /*public void TestPostContactUs()
        {
            var streamWriter = new StreamWriter("log.txt");

            //Arrange
            var context = new lifeplus_dbContext();
            var contactusABC = context.ContactUs.Where(contact => contact.Firstname == "abc").LastOrDefault();
            streamWriter.WriteLine(contactusABC.Firstname);

            var controller = new ContactUsController(context);

            //Act
            var contactus = controller.PostContactU().Result.Value;
            var result = contactus.LastOrDefault();

            Console.WriteLine(result.Firstname + "taken from ContactU table");

            //Assert
            Assert.IsNotNull(result, "No ContactUs data returned");
            streamWriter.Close();
        }*/
    }
}
