-- MySQL dump 10.13  Distrib 5.6.20, for osx10.8 (x86_64)
--
-- Host: localhost    Database: getting_started_intermediate
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CoffeeShop`
--

DROP TABLE IF EXISTS `CoffeeShop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CoffeeShop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `city` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CoffeeShop`
--

LOCK TABLES `CoffeeShop` WRITE;
/*!40000 ALTER TABLE `CoffeeShop` DISABLE KEYS */;
INSERT INTO `CoffeeShop` VALUES (1,'Bel Cafe','Vancouver'),(2,'Three Bees Coffee House','San Mateo'),(3,'Caffe Artigiano','Vancouver');
/*!40000 ALTER TABLE `CoffeeShop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comments` varchar(512) DEFAULT NULL,
  `coffeeShopId` int(11) DEFAULT NULL,
  `publisherId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
INSERT INTO `Review` VALUES (1,'2014-11-29 22:13:38',5,'A very good coffee shop.',1,1),(2,'2014-11-30 22:13:38',5,'Quite pleasant.',1,2),(3,'2014-12-01 22:13:38',4,'It was ok.',2,2),(4,'2014-12-02 22:13:38',4,'I go here everyday.',3,3);
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviewer`
--

DROP TABLE IF EXISTS `Reviewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reviewer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `credentials` text,
  `challenges` text,
  `email` varchar(512) DEFAULT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastUpdated` datetime DEFAULT NULL,
  `coffeeShopId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviewer`
--

LOCK TABLES `Reviewer` WRITE;
/*!40000 ALTER TABLE `Reviewer` DISABLE KEYS */;
INSERT INTO `Reviewer` VALUES (1,NULL,NULL,'$2a$10$NdmXDWnaayGgOxBHbzm6oejf2Yjd82JGf0M7JtG2QU.0H4j6IdfQK',NULL,NULL,'foo@bar.com',NULL,NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,'$2a$10$VFF.I/SSTIj0OLUUIV2WK.VRDcS9xrqk8pPYIU8Bc9gUPafPK61Me',NULL,NULL,'john@doe.com',NULL,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,'$2a$10$skq38tmVjwtEheAN243/zedTy4Ha7FIZbVQg.kPXMp2.oLw6kmSnG',NULL,NULL,'jane@doe.com',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Reviewer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-03 14:18:00
