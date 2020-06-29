-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jun 28, 2020 at 12:21 PM
-- Server version: 10.3.12-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sieve1`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
CREATE TABLE IF NOT EXISTS `tbl_admin` (
  `admin_id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `privilege_level` enum('0','1') NOT NULL DEFAULT '0',
  `permitted` enum('yes','no') NOT NULL DEFAULT 'no',
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `email`, `password`, `privilege_level`, `permitted`) VALUES
(1, 'test', 'test', '0', 'no'),
(2, 'achinthaisuru444@gmail.com', '361a54b94f815e9c3b434a32c061d10f92e107a81a196097894c8ab708c52d255a0eafba58a1d01d89e3e06927c56fe7f57ce18f227b8d93cb82eb433959dbdca8f99b1ce55be4d7235834dd5226159217ed3601e69e0694368308f7888f89794d88049dd560a615', '0', 'yes'),
(3, 'test@gmail.com', '06b34dce7900dcf21ac1092f0e2feaea3cd5fff163a412e9eafc110e0a307564f50ec4be38273e9564c03f427a3026b8dedab8859abe398f857aa408b29d57ec404e9542d36b68ff605f34a3bcc6e628fb888902d40767559778715ab11725a15870ea8f09d2fd11', '0', 'no'),
(4, 'achinthaisuru@yahoo.co.uk', '54c1bd4cd6c114db7d00457245fcbc53cadb09a63083ea735df55ce16be89449ec6fd11f3f3cb0b5aced064ff039c94433c08af9786a5c652b71616ddfb4ccb257fca93e386175f409706c78e70660753dae89d6bd25e0ae77f29fdb937b2e9261bcef7477251f53', '0', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_application`
--

DROP TABLE IF EXISTS `tbl_application`;
CREATE TABLE IF NOT EXISTS `tbl_application` (
  `app_id` int(10) NOT NULL AUTO_INCREMENT,
  `description` tinytext NOT NULL,
  `icon_image` text NOT NULL,
  `app_name` varchar(50) NOT NULL,
  `privacy_policy_link` text NOT NULL,
  `background_image` text DEFAULT NULL,
  PRIMARY KEY (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_application`
--

INSERT INTO `tbl_application` (`app_id`, `description`, `icon_image`, `app_name`, `privacy_policy_link`, `background_image`) VALUES
(1, 'One of the Biggest Travel Platform', 'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png', 'UBER', 'https://www.uber.com/global/en/privacy/notice/?_ga=2.236483585.105932503.1582566308-1178562385.1582437672', 'https://images4.alphacoders.com/380/thumb-1920-38094.jpg'),
(2, 'One of the Biggest Social Media Platform', 'https://pluspng.com/img-png/facebook-hd-png-facebook-png-hd-png-image-2023.png', 'Facebook', 'https://www.facebook.com/policy.php', 'https://i.redd.it/csoglcsofa8x.jpg'),
(3, 'One of the biggest social media platform', 'https://pluspng.com/img-png/google-logo-png-open-2000.png', 'Google', 'https://policies.google.com/privacy?hl=en-US', 'https://www.wallpaperup.com/uploads/wallpapers/2013/09/06/143165/cea1a69ed194ce494689d6001768732e.jpg'),
(4, 'Sri Lanka biggest online transport platform', 'https://upload.wikimedia.org/wikipedia/commons/0/0c/PickMe_SriLanka_Logo.png', 'Pick Me', 'https://pickme.lk/themes/pickme/assets/pdf/pickme-privacy-policy.pdf', 'https://c.wallhere.com/photos/90/c2/cityscape_city_lights_Chicago_night_blue_USA-254218.jpg!d'),
(5, 'One of the biggest online dating platform', 'https://tinder.com/static/tinder.png', 'Tinder', 'https://policies.tinder.com/privacy/intl/en', 'https://images4.alphacoders.com/380/thumb-1920-38094.jpg'),
(6, 'Sri Lanka biggest online news platform', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png', 'BBC', 'https://www.bbc.co.uk/usingthebbc/', 'https://i.redd.it/csoglcsofa8x.jpg'),
(7, 'One of the biggest online food platform', 'https://seeklogo.com/images/U/uber-eats-logo-CA3BA2098B-seeklogo.com.png', 'Uber Eats', 'https://www.uber.com/legal/en/#policies-and-guidelines', 'https://www.wallpaperup.com/uploads/wallpapers/2013/09/06/143165/cea1a69ed194ce494689d6001768732e.jpg'),
(8, 'Sri Lanka biggest online transport platform', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png', 'CNN', 'https://edition.cnn.com/2014/01/17/cnn-info/privacy-policy/index.html', 'https://c.wallhere.com/photos/90/c2/cityscape_city_lights_Chicago_night_blue_USA-254218.jpg!d');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_app_category`
--

DROP TABLE IF EXISTS `tbl_app_category`;
CREATE TABLE IF NOT EXISTS `tbl_app_category` (
  `app_id` int(10) NOT NULL,
  `category_id` int(10) NOT NULL,
  PRIMARY KEY (`app_id`,`category_id`) USING BTREE,
  KEY `tbl_app_category_ibfk_2` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_app_category`
--

INSERT INTO `tbl_app_category` (`app_id`, `category_id`) VALUES
(1, 1),
(2, 5),
(3, 5),
(4, 1),
(5, 2),
(6, 3),
(7, 4),
(8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_app_data_removal`
--

DROP TABLE IF EXISTS `tbl_app_data_removal`;
CREATE TABLE IF NOT EXISTS `tbl_app_data_removal` (
  `app_id` int(10) NOT NULL,
  `policy` text NOT NULL,
  `date_modified` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `app_id` (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_app_data_removal`
--

INSERT INTO `tbl_app_data_removal` (`app_id`, `policy`, `date_modified`, `id`) VALUES
(1, 'Uber retains user profile, transaction, and other personal data for as long as a user maintains their Uber account. \r\n', '2020-04-20 00:01:48', 1),
(2, 'Data store until your account is deleted.', '2020-04-20 00:05:06', 2),
(1, 'Uber may retain certain user data(such as location, device, usage data) after receiving an account deletion request if necessary, such as to comply with legal requirements ', '2020-04-24 00:00:00', 3),
(2, 'But when  the account is deleted all posted information given by others about you is not deleted since it a part of your account.So they are not deleted ', '2020-04-24 00:00:00', 4),
(1, 'Use it for purposes of safety, security, fraud prevention and detection, and research and development.', '2020-04-25 00:00:00', 5),
(3, 'Uber retains user profile, transaction, and other personal data for as long as a user maintains their Uber account. \r\n\r\nUber may retain certain user data(such as location, device, usage data) after receiving an account deletion request if necessary, such as to comply with legal requirements---use it for purposes of safety, security, fraud prevention and detection, and research and development. \r\n', '2020-04-20 00:01:48', 6),
(4, 'Data store until your account is deleted. When account deleted all posted Information given by others about you is not a part of your account.So they are not deleted ', '2020-04-20 00:05:06', 7),
(5, 'Uber retains user profile, transaction, and other personal data for as long as a user maintains their Uber account. \r\n\r\nUber may retain certain user data(such as location, device, usage data) after receiving an account deletion request if necessary, such as to comply with legal requirements---use it for purposes of safety, security, fraud prevention and detection, and research and development. \r\n', '2020-04-20 00:01:48', 8),
(6, 'Data store until your account is deleted. When account deleted all posted Information given by others about you is not a part of your account.So they are not deleted ', '2020-04-20 00:05:06', 9),
(7, 'Uber retains user profile, transaction, and other personal data for as long as a user maintains their Uber account. \r\n\r\nUber may retain certain user data(such as location, device, usage data) after receiving an account deletion request if necessary, such as to comply with legal requirements---use it for purposes of safety, security, fraud prevention and detection, and research and development. \r\n', '2020-04-20 00:01:48', 10),
(8, 'Data store until your account is deleted. When account deleted all posted Information given by others about you is not a part of your account.So they are not deleted ', '2020-04-20 00:05:06', 11);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_app_data_type`
--

DROP TABLE IF EXISTS `tbl_app_data_type`;
CREATE TABLE IF NOT EXISTS `tbl_app_data_type` (
  `app_id` int(10) NOT NULL,
  `data_type_id` int(10) NOT NULL,
  `date_modified` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`app_id`,`data_type_id`),
  KEY `data_type_id` (`data_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_app_data_type`
--

INSERT INTO `tbl_app_data_type` (`app_id`, `data_type_id`, `date_modified`) VALUES
(1, 1, '2020-04-20 00:11:02'),
(1, 2, '2020-04-20 00:13:59'),
(1, 4, '2020-04-20 00:14:25'),
(1, 5, '2020-04-20 00:14:25'),
(1, 7, '2020-04-20 00:14:25'),
(1, 9, '2020-04-20 00:14:48'),
(1, 11, '2020-04-20 00:15:14'),
(1, 12, '2020-04-20 00:15:14'),
(1, 13, '2020-04-20 00:15:32'),
(1, 19, '2020-04-20 00:17:59'),
(2, 1, '2020-04-20 00:21:09'),
(2, 2, '2020-04-20 00:22:05'),
(2, 3, '2020-04-20 00:22:05'),
(2, 4, '2020-04-20 00:22:05'),
(2, 5, '2020-04-20 00:22:05'),
(2, 6, '2020-04-20 00:22:05'),
(2, 7, '2020-04-20 00:22:05'),
(2, 8, '2020-04-20 00:22:05'),
(2, 9, '2020-04-20 00:22:05'),
(2, 10, '2020-04-20 00:22:52'),
(2, 12, '2020-04-20 00:22:52'),
(2, 13, '2020-04-20 00:22:52'),
(2, 14, '2020-04-20 00:22:52'),
(2, 20, '2020-04-20 00:22:52'),
(2, 21, '2020-04-20 00:22:52'),
(3, 1, '2020-04-20 00:11:02'),
(3, 2, '2020-04-20 00:13:59'),
(3, 4, '2020-04-20 00:14:25'),
(3, 5, '2020-04-20 00:14:25'),
(3, 7, '2020-04-20 00:14:25'),
(3, 9, '2020-04-20 00:14:48'),
(3, 11, '2020-04-20 00:15:14'),
(3, 12, '2020-04-20 00:15:14'),
(3, 13, '2020-04-20 00:15:32'),
(3, 19, '2020-04-20 00:17:59'),
(4, 1, '2020-04-20 00:21:09'),
(4, 2, '2020-04-20 00:22:05'),
(4, 3, '2020-04-20 00:22:05'),
(4, 4, '2020-04-20 00:22:05'),
(4, 5, '2020-04-20 00:22:05'),
(4, 6, '2020-04-20 00:22:05'),
(4, 7, '2020-04-20 00:22:05'),
(4, 8, '2020-04-20 00:22:05'),
(4, 9, '2020-04-20 00:22:05'),
(4, 10, '2020-04-20 00:22:52'),
(4, 12, '2020-04-20 00:22:52'),
(4, 13, '2020-04-20 00:22:52'),
(4, 14, '2020-04-20 00:22:52'),
(4, 20, '2020-04-20 00:22:52'),
(4, 21, '2020-04-20 00:22:52'),
(5, 1, '2020-04-20 00:11:02'),
(5, 2, '2020-04-20 00:13:59'),
(5, 4, '2020-04-20 00:14:25'),
(5, 5, '2020-04-20 00:14:25'),
(5, 7, '2020-04-20 00:14:25'),
(5, 9, '2020-04-20 00:14:48'),
(5, 11, '2020-04-20 00:15:14'),
(5, 12, '2020-04-20 00:15:14'),
(5, 13, '2020-04-20 00:15:32'),
(5, 19, '2020-04-20 00:17:59'),
(6, 1, '2020-04-20 00:21:09'),
(6, 2, '2020-04-20 00:22:05'),
(6, 3, '2020-04-20 00:22:05'),
(6, 4, '2020-04-20 00:22:05'),
(6, 5, '2020-04-20 00:22:05'),
(6, 6, '2020-04-20 00:22:05'),
(6, 7, '2020-04-20 00:22:05'),
(6, 8, '2020-04-20 00:22:05'),
(6, 9, '2020-04-20 00:22:05'),
(6, 10, '2020-04-20 00:22:52'),
(6, 12, '2020-04-20 00:22:52'),
(6, 13, '2020-04-20 00:22:52'),
(6, 14, '2020-04-20 00:22:52'),
(6, 20, '2020-04-20 00:22:52'),
(6, 21, '2020-04-20 00:22:52'),
(7, 1, '2020-04-20 00:11:02'),
(7, 2, '2020-04-20 00:13:59'),
(7, 4, '2020-04-20 00:14:25'),
(7, 5, '2020-04-20 00:14:25'),
(7, 7, '2020-04-20 00:14:25'),
(7, 9, '2020-04-20 00:14:48'),
(7, 11, '2020-04-20 00:15:14'),
(7, 12, '2020-04-20 00:15:14'),
(7, 13, '2020-04-20 00:15:32'),
(7, 19, '2020-04-20 00:17:59'),
(8, 1, '2020-04-20 00:21:09'),
(8, 2, '2020-04-20 00:22:05'),
(8, 3, '2020-04-20 00:22:05'),
(8, 4, '2020-04-20 00:22:05'),
(8, 5, '2020-04-20 00:22:05'),
(8, 6, '2020-04-20 00:22:05'),
(8, 7, '2020-04-20 00:22:05'),
(8, 8, '2020-04-20 00:22:05'),
(8, 9, '2020-04-20 00:22:05'),
(8, 10, '2020-04-20 00:22:52'),
(8, 12, '2020-04-20 00:22:52'),
(8, 13, '2020-04-20 00:22:52'),
(8, 14, '2020-04-20 00:22:52'),
(8, 20, '2020-04-20 00:22:52'),
(8, 21, '2020-04-20 00:22:52');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_app_data_usage`
--

DROP TABLE IF EXISTS `tbl_app_data_usage`;
CREATE TABLE IF NOT EXISTS `tbl_app_data_usage` (
  `app_id` int(10) NOT NULL,
  `policy` text NOT NULL,
  `date_modified` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `app_id` (`app_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_app_data_usage`
--

INSERT INTO `tbl_app_data_usage` (`app_id`, `policy`, `date_modified`, `id`) VALUES
(1, 'Providing services and features', '2020-04-19 23:59:35', 1),
(2, 'Location related information to provide,personalise and improve their product,including ads,for you and the others ', '2020-04-20 00:00:11', 2),
(1, 'Safety and security', '2020-04-24 00:00:00', 3),
(1, 'Customer support', '2020-04-24 00:00:00', 4),
(1, 'Research and development', '2020-04-24 00:00:00', 5),
(1, 'Marketing', '2020-04-24 00:00:00', 6),
(1, 'They don’t sell users’ personal data(except if user has given his consent to do so)', '2020-04-24 00:00:00', 7),
(1, 'Automated decision-making', '2020-04-24 00:00:00', 8),
(2, 'Network and connection information(people,pages,account,hashtags etc) may use to help others and you to find people you may know \r\n', '2020-04-24 00:00:00', 9),
(2, 'Network and connection information(people,pages,account,hashtags etc) may use to help others and you to find people you may know', '2020-04-24 00:00:00', 10),
(2, 'Device operations-help to distinguish humans from bots', '2020-04-24 00:00:00', 11),
(2, 'Name of mobile operator,timezone,mobile number,IP address,connection speed-to help\r\nyou to stream a video from your phone to TV', '2020-04-24 00:00:00', 12),
(2, 'Interest,action connections-personalize ads,offer sponsored content', '2020-04-24 00:00:00', 13),
(2, 'Network and connection information(people,pages,account,hashtags etc) may use to help others and you to find people you may know \r\n', '2020-04-24 00:00:00', 14),
(2, 'Your activity off our Products, such as the websites you visit and ads you see-to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services', '2020-04-24 00:00:00', 15),
(3, 'Providing services and features', '2020-04-19 23:59:35', 16),
(4, 'Location related informations-to provide,personalise and improve their product,including ads,for you and others \r\nNetwork and connection informations(people,pages,account,hashtags)-help others and you to find people you may know \r\nDevice operations-help to distinguish humans from bots \r\nName of mobile operator,timezone,mobile number,IP address,connection speed-to help you to stream a video from your phone to TV \r\nInterest,action connections-personalize ads,offer sponsored content \r\nyour activity off our Products, such as the websites you visit and ads you see-to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services. \r\n', '2020-04-20 00:00:11', 17),
(5, 'Providing services and features, \r\n Safety and security ,\r\n Customer support, \r\nResearch and development ,\r\n Marketing ,\r\nThey don’t sell users’ personal data(except users’ consent) ,\r\n Automated decision-making', '2020-04-19 23:59:35', 18),
(6, 'Location related informations-to provide,personalise and improve their product,including ads,for you and others \r\nNetwork and connection informations(people,pages,account,hashtags)-help others and you to find people you may know \r\nDevice operations-help to distinguish humans from bots \r\nName of mobile operator,timezone,mobile number,IP address,connection speed-to help you to stream a video from your phone to TV \r\nInterest,action connections-personalize ads,offer sponsored content \r\nyour activity off our Products, such as the websites you visit and ads you see-to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services. \r\n', '2020-04-20 00:00:11', 19),
(7, 'Providing services and features, \r\n Safety and security ,\r\n Customer support, \r\nResearch and development ,\r\n Marketing ,\r\nThey don’t sell users’ personal data(except users’ consent) ,\r\n Automated decision-making', '2020-04-19 23:59:35', 20),
(8, 'Location related informations-to provide,personalise and improve their product,including ads,for you and others \r\nNetwork and connection informations(people,pages,account,hashtags)-help others and you to find people you may know \r\nDevice operations-help to distinguish humans from bots \r\nName of mobile operator,timezone,mobile number,IP address,connection speed-to help you to stream a video from your phone to TV \r\nInterest,action connections-personalize ads,offer sponsored content \r\nyour activity off our Products, such as the websites you visit and ads you see-to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services. \r\n', '2020-04-20 00:00:11', 21);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_app_officer`
--

DROP TABLE IF EXISTS `tbl_app_officer`;
CREATE TABLE IF NOT EXISTS `tbl_app_officer` (
  `app_id` int(10) NOT NULL,
  `privacy_officer_id` int(10) NOT NULL,
  PRIMARY KEY (`app_id`) USING BTREE,
  KEY `privacy_officer_id` (`privacy_officer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_app_officer`
--

INSERT INTO `tbl_app_officer` (`app_id`, `privacy_officer_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_app_update`
--

DROP TABLE IF EXISTS `tbl_app_update`;
CREATE TABLE IF NOT EXISTS `tbl_app_update` (
  `app_id` int(10) NOT NULL,
  `date_modified` datetime NOT NULL,
  `content_id` int(10) NOT NULL,
  PRIMARY KEY (`app_id`),
  KEY `content_id` (`content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `category_id` int(10) NOT NULL AUTO_INCREMENT,
  `icon_link` text NOT NULL,
  `category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `icon_link`, `category_name`) VALUES
(1, 'e56f', 'Transport'),
(2, 'e63d', 'Dating'),
(3, 'e333', 'News'),
(4, 'e57a', 'Food'),
(5, 'e0b7', 'Social media');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_common_user`
--

DROP TABLE IF EXISTS `tbl_common_user`;
CREATE TABLE IF NOT EXISTS `tbl_common_user` (
  `common_user_id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `uid` varchar(255) DEFAULT NULL,
  `imageUrl` text DEFAULT NULL,
  `permitted` enum('yes','no') NOT NULL DEFAULT 'yes',
  PRIMARY KEY (`common_user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `uid` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_common_user`
--

INSERT INTO `tbl_common_user` (`common_user_id`, `email`, `password`, `uid`, `imageUrl`, `permitted`) VALUES
(1, 'temp1@gmail.com', 'c95b1d8aa7877781a21cdaf83deb01dde0ae9816754c7773e7b9c5705ecb942e3d45993fc393ac8f23138c5bfc61de0b8c0102915b47c82be92e87cbb8caaf68a2e3da367fdf3dbc5570f93d32e12d50508771cfbf2a47cc8d6c208a1873d649f00e596899d34966', NULL, NULL, 'yes'),
(6, 'temp@gmail.com', '368776096f9a9bb51ad145f3dd5a7458ab91aaed0be09e5c2e3f837d23d7278d0c996dd8024ee0c277a5ebe9ef03a36d986547c7907583523cc7f94ed71fcc559463507fb32736cca191ab92928662fbf8ff7bceb3971b58ba3d13f8ac9c9c06a22a4e65aebf04dd', NULL, NULL, 'yes'),
(7, 'achinthaisuru@gmail.com', '7a9f4a66182c664466d287e64819381a346dbcbb8ae4a8d76c45057a2f71c79cd47ccb82ed2715967946437adbec137d4a85c955c48f9bd99a0791c3cd1d18c4c0aec97d8a820c89c2c578a1561f85844de6bf2dd08b13d686f81156d4e798e19ce8a90298ae4e60', NULL, NULL, 'yes'),
(8, 'test1@gmail.com', 'ff517de82e3af13933bd26f3097f05a10f562ccc510adbff573f34fec7cdf299604257ddec23e3be63cf8c5a6293d8e1a2a1c70233741b657d555ef7bc26cd351aa90866f1be13d49c369ce504d1799c2590294849dafadbbaf39eab90e6ac342255bac352569788', NULL, NULL, 'no'),
(9, 'temp6@gmail.com', '93336fd5d759157598889940f5af3c79a281982320b424185d4b4829577c4881f0f153e2c82198c9e4a76514c58766d54d8b2bd67f372326f0c04ade858faa9631f84c08dd075d87d41b0a63d30c29bf2a03dde336b802ffda3c20b490f36861e00e4011bb43fd0d', NULL, NULL, 'yes'),
(11, 'achinthaisuru.17@cse.mrt.ac.lk', NULL, '113071910607802375464', 'https://lh3.googleusercontent.com/a-/AOh14GgdwZRcEKeknSCyISP66Q0Xo4aaHCAjYaFb5tkDkw=s96-c', 'yes'),
(12, 'achinthaisuru@yahoo.co.uk', NULL, '3185100548207445', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3185100548207445&height=50&width=50&ext=1591735617&hash=AeTJ0ZZZ57NVwAAx', 'yes'),
(13, 'nandalal@kln.ac.lk', '7322e0c6fb59f39fecbfcfbcb109163dc9d561e49388b2e73f4db481d2dd07f85092aef2080f99454780925f676cab5df1cb940a303054a343e4b93698cb6b60fb7fe32dee81daa1c5735d0cc9b037e04cb202649b24f9ca596623b922b6189460a0cb7dcd0f13f7', NULL, NULL, 'yes'),
(110, 'test2@gmail.com', '5204e6f4efebd50f2179e9f1f96676b6ffa719865d222829aac973d002ba0006a976894f74e3ac7fb3f7533c42ee78d97241a45364daf526ae87100917bdf780d100fcb9ae26fa538b7d9a49f1c19316c1ca7e2938e9b677a107e08ef3fe2d0f42da3948923edc0e', NULL, NULL, 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_content`
--

DROP TABLE IF EXISTS `tbl_content`;
CREATE TABLE IF NOT EXISTS `tbl_content` (
  `content_id` int(10) NOT NULL AUTO_INCREMENT,
  `admin_id` int(10) NOT NULL,
  `date_created` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted` enum('True','False','') NOT NULL,
  PRIMARY KEY (`content_id`),
  KEY `admin_id` (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_content`
--

INSERT INTO `tbl_content` (`content_id`, `admin_id`, `date_created`, `deleted`) VALUES
(1, 1, '2020-04-21 00:00:00', 'False'),
(2, 1, '2020-04-21 00:00:00', 'False'),
(3, 1, '2020-04-21 00:00:00', 'False'),
(4, 1, '2020-04-21 00:00:00', 'False'),
(5, 1, '2020-04-21 00:00:00', 'False'),
(6, 1, '2020-04-21 00:00:00', 'False'),
(7, 1, '2020-04-21 00:00:00', 'False'),
(8, 1, '2020-04-21 00:00:00', 'False'),
(9, 1, '2020-04-21 00:00:00', 'False'),
(10, 1, '2020-04-21 00:00:00', 'False'),
(11, 1, '2020-04-21 00:00:00', 'False'),
(12, 1, '2020-04-21 00:00:00', 'False'),
(13, 1, '2020-04-21 00:00:00', 'False'),
(14, 1, '2020-04-21 00:00:00', 'False'),
(15, 1, '2020-04-21 00:00:00', 'False'),
(16, 1, '2020-04-21 00:00:00', 'False'),
(17, 1, '2020-04-21 00:00:00', 'False'),
(18, 1, '2020-04-21 00:00:00', 'False'),
(19, 1, '2020-04-21 00:00:00', 'False'),
(20, 1, '2020-04-21 00:00:00', 'False');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_data_type`
--

DROP TABLE IF EXISTS `tbl_data_type`;
CREATE TABLE IF NOT EXISTS `tbl_data_type` (
  `data_type_id` int(10) NOT NULL AUTO_INCREMENT,
  `data_type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`data_type_id`),
  UNIQUE KEY `data_type_name` (`data_type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_data_type`
--

INSERT INTO `tbl_data_type` (`data_type_id`, `data_type_name`) VALUES
(7, 'address'),
(19, 'battery level'),
(14, 'connection speed'),
(11, 'device'),
(17, 'device motion information'),
(18, 'device unique identifier'),
(9, 'dob'),
(2, 'email'),
(8, 'employment'),
(3, 'gender'),
(5, 'ipaddress'),
(20, 'ISP info'),
(6, 'language'),
(4, 'mobile'),
(1, 'name'),
(12, 'OS version'),
(13, 'signal strength'),
(21, 'software version'),
(10, 'timezone');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_intersting_news`
--

DROP TABLE IF EXISTS `tbl_intersting_news`;
CREATE TABLE IF NOT EXISTS `tbl_intersting_news` (
  `news_id` int(10) NOT NULL AUTO_INCREMENT,
  `content_id` int(10) NOT NULL,
  `description` text NOT NULL,
  `news` varchar(255) NOT NULL,
  `full_link` text DEFAULT NULL,
  PRIMARY KEY (`news_id`),
  KEY `content_id` (`content_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_intersting_news`
--

INSERT INTO `tbl_intersting_news` (`news_id`, `content_id`, `description`, `news`, `full_link`) VALUES
(1, 11, 'In 2016 57 million users privacy data was breached, uber had to pay over $100,000 to\r\nthe hackers to delete the data, the company kept this news hidden for almost a year.', 'Uber Data Breach', 'https://www.youtube.com/watch?v=MaRZOVtc1wE'),
(2, 12, 'Did you know, PickMe has not updated there privacy policy since 2016 May 1, that is nearly 4 years! And there privacy officer contact email is not working as well!', 'PickMe Privacy Policy', 'https://pickme.lk/themes/pickme/assets/pdf/pickme-privacy-policy.pdf'),
(3, 13, 'Finn Lützow-Holm Myrstad (Director of Digital Policy and Energy ofNorwegian Consumer Council ) conduct an experiment to read data privacy policies of 33 commocly used apps like (whatsapp , twitter, facebook etc) took more than 31 hours to finish (that is longer than a movie marathon of Harry Potter and Lord of the Rings  combined). – Reading is one thing but understanding it would take much much longer.', 'Watch movies or read privacy policies?', 'https://youtu.be/4E_1AB1rsSw'),
(4, 14, 'According to the mapping of data protection and privacy conducted by the United Nations Conference on Trade and Development (UNCTAD) in 2019, out of 107 countries mapped, 21% have no legislation around privacy and data protection, including Sri Lanka.', 'There are no laws to protect your privacy in Sri Lanka', 'http://www.ips.lk/talkingeconomics/2020/01/13/the-growing-need-for-privacy-and-data-protection-in-sri-lanka/');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_privacy_law`
--

DROP TABLE IF EXISTS `tbl_privacy_law`;
CREATE TABLE IF NOT EXISTS `tbl_privacy_law` (
  `law_id` int(10) NOT NULL AUTO_INCREMENT,
  `law` varchar(255) NOT NULL,
  `full_link` text NOT NULL,
  `description` text NOT NULL,
  `content_id` int(10) NOT NULL,
  PRIMARY KEY (`law_id`),
  KEY `content_id` (`content_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_privacy_law`
--

INSERT INTO `tbl_privacy_law` (`law_id`, `law`, `full_link`, `description`, `content_id`) VALUES
(1, 'GDPR', 'https://gdpr-info.eu/', 'The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy in the European Union (EU) and the European Economic Area (EEA). It also addresses the transfer of personal data outside the EU and EEA areas. The GDPR aims primarily to give control to individuals over their personal data and to simplify the regulatory environment for international business by unifying the regulation within the EU.', 1),
(2, 'LGPD', 'https://www.cookiebot.com/en/lgpd/', 'Brazil’s Lei Geral de Proteçao de Dados (LGPD) was modeled directly after GDPR and is nearly identical in terms of scope, applicability, and financial penalties for non-compliance. Companies wishing to do business with Latin America’s largest economy will have to comply with LGPD by February 2020 or be subject to fines of up to 50 million BRL (approximately 11.8 million EUR).', 2),
(3, 'Japan\'s Act on Protection of Personal Information', 'https://www2.deloitte.com/jp/en/pages/legal/articles/dt-legal-japan-regulatory-update-17may2017.html', 'Japan\'s Act on Protection of Personal Information was amended in May 2017 and now applies to both foreign and domestic companies that process the data of Japanese citizens.  Companies located outside of Japan will now be subject to the strict guidelines laid down in the Act.', 3),
(8, 'The Privacy Amendment', 'https://www.legislation.gov.au/Details/C2017A00012', 'The Privacy Amendment (Notifiable Data Breaches) to Australia’s Privacy Act came into effect in February 2018. Organizations with an annual turnover of over 3 million AUD will have to disclose data breaches that pose a “real threat of serious harm” within 30 days of their discovery or faces fines of up to 1.8 million AUD (approximately 1.1 million EUR).', 4),
(9, 'Personal Information Protection Act ', 'https://www.privacy.go.kr/eng/laws_policies_list.do', 'For companies that process personal data of South Koreans, privacy standards on par with GDPR are nothing new. South Korea\'s Personal Information Protection Act has been in effect since September of 2011 and from the outset has included many GDPR-like provisions, including requirements for gaining consent, the scope of applicable data, appointment of a Chief Privacy Officer, and limitation and justification of data retention periods. ', 5),
(10, 'PDPA', 'https://www.dataprotectionreport.com/2020/02/thailand-personal-data-protection-law/', 'The National Legislative Assembly of Thailand approved and endorsed the Thailand Personal Data Protection Act (PDPA). The Act was subsequently published in the Government Gazette on 27 May 2019 and will come into effect exactly a year later on 27 May 2020.  The PDPA is similar to GDPR in a number of ways, including the broad definition of personal data, the requirement to establish a legal basis for collection and use of personal data, extraterritorial applicability, and potentially harsh penalties for non-compliance.', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_privacy_officer`
--

DROP TABLE IF EXISTS `tbl_privacy_officer`;
CREATE TABLE IF NOT EXISTS `tbl_privacy_officer` (
  `email_address` varchar(100) DEFAULT NULL,
  `privacy_officer_id` int(10) NOT NULL AUTO_INCREMENT,
  `contact_link` text DEFAULT NULL,
  `first_line` varchar(80) DEFAULT NULL,
  `second_line` varchar(80) DEFAULT NULL,
  `third_line` varchar(80) DEFAULT NULL,
  `fourth_line` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`privacy_officer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_privacy_officer`
--

INSERT INTO `tbl_privacy_officer` (`email_address`, `privacy_officer_id`, `contact_link`, `first_line`, `second_line`, `third_line`, `fourth_line`) VALUES
(NULL, 1, 'https://help.uber.com/riders/article/submit-a-privacy-inquiry-without-an-uber-ac\r\ncount?nodeId=eb90a9bb-8286-4c10-ae28-fb641b889bac', NULL, NULL, NULL, NULL),
(NULL, 2, 'https://www.facebook.com/help/contact/861937627253138', 'Facebook,inc.ATTN:', 'Privacy operation 1601', 'Willow Road Menlo Park', 'CA 94028,USA'),
(NULL, 3, 'https://www.google.com/contact/', 'Google LLC', '1600 Amphitheatre Parkway', 'Mountain View, CA 94043', 'USA'),
('privacy@pickme.lk', 4, 'https://www.google.com/contact/', 'Digital Mobility Solutions Lanka (Pvt) Ltd.', 'No.309,High Level Road', 'Colombo 04', NULL),
(NULL, 5, 'https://www.help.tinder.com/hc/en-us/requests/new', 'Privacy Officer Match Group', 'LLC 8750 North Central Expressway Suite 1400 Dallas', 'TX 75231', 'USA'),
('dpa.officer@bbc.co.uk', 6, NULL, 'BBC DPO', 'BC2 A4', '201 Wood Lane,London W12 7TP', NULL),
(NULL, 7, 'https://help.uber.com/riders/article/submit-a-privacy-inquiry-without-an-uber-ac\r\ncount?nodeId=eb90a9bb-8286-4c10-ae28-fb641b889bac', 'E-mail Administration Turner Broadcasting System', 'Inc. Attention: Privacy Policy Coordinator', '1050 Techwood Drive NW', 'Atlanta, GA 30303'),
('privacy.cnn@turner.com', 8, NULL, 'Facebook,inc.ATTN:', 'Privacy operation 1601', 'Willow Road Menlo Park', 'CA 94028,USA');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_privacy_tip`
--

DROP TABLE IF EXISTS `tbl_privacy_tip`;
CREATE TABLE IF NOT EXISTS `tbl_privacy_tip` (
  `pt_id` int(10) NOT NULL AUTO_INCREMENT,
  `tip` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `content_id` int(10) NOT NULL,
  PRIMARY KEY (`pt_id`),
  KEY `content_id` (`content_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_privacy_tip`
--

INSERT INTO `tbl_privacy_tip` (`pt_id`, `tip`, `description`, `content_id`) VALUES
(1, 'Weird Permission - Just Say NO!', 'If a Flash Light app asks permission to access your location ask yourself WHY?', 7),
(2, 'Only Use OFFICAL APP STORES!', 'Do not install apps from unreliable sources, because to do that you need disable security settings, which are there to keep you and your data safe', 8),
(3, 'Weird Permission - Just Say NO!', 'If a Flash Light app asks permission to access your location ask yourself WHY?', 9),
(4, 'Only Use OFFICAL APP STORES!', 'Do not install apps from unreliable sources, because to do that you need disable security settings, which are there to keep you and your data safe', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_suggestion`
--

DROP TABLE IF EXISTS `tbl_suggestion`;
CREATE TABLE IF NOT EXISTS `tbl_suggestion` (
  `s_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `suggestion` text NOT NULL,
  PRIMARY KEY (`s_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_suggestion`
--

INSERT INTO `tbl_suggestion` (`s_id`, `user_id`, `suggestion`) VALUES
(1, 1, 'Temp Suggestion'),
(18, 11, 'hi suggestion'),
(19, 11, 'temp suggestion'),
(20, 11, 'teeee');

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_app_categories`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `view_app_categories`;
CREATE TABLE IF NOT EXISTS `view_app_categories` (
`app_id` int(10)
,`category_id` int(10)
,`description` tinytext
,`icon_image` text
,`background_image` text
,`app_name` varchar(50)
,`privacy_policy_link` text
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_app_category`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `view_app_category`;
CREATE TABLE IF NOT EXISTS `view_app_category` (
`app_id` int(10)
,`app_name` varchar(50)
,`icon_image` text
,`category_name` varchar(50)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_app_data_count`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `view_app_data_count`;
CREATE TABLE IF NOT EXISTS `view_app_data_count` (
`app_id` int(10)
,`d_count` bigint(21)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_app_data_type`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `view_app_data_type`;
CREATE TABLE IF NOT EXISTS `view_app_data_type` (
`app_id` int(10)
,`data_type_name` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_app_privacy_officer`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `view_app_privacy_officer`;
CREATE TABLE IF NOT EXISTS `view_app_privacy_officer` (
`app_id` int(10)
,`contact_link` text
,`email_address` varchar(100)
,`first_line` varchar(80)
,`second_line` varchar(80)
,`third_line` varchar(80)
,`fourth_line` varchar(80)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_dashboard`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `view_dashboard`;
CREATE TABLE IF NOT EXISTS `view_dashboard` (
`app_id` int(10)
,`app_name` varchar(50)
,`icon_image` text
,`category_name` varchar(50)
,`d_count` bigint(21)
);

-- --------------------------------------------------------

--
-- Structure for view `view_app_categories`
--
DROP TABLE IF EXISTS `view_app_categories`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_app_categories`  AS  select `a`.`app_id` AS `app_id`,`a`.`category_id` AS `category_id`,`b`.`description` AS `description`,`b`.`icon_image` AS `icon_image`,`b`.`background_image` AS `background_image`,`b`.`app_name` AS `app_name`,`b`.`privacy_policy_link` AS `privacy_policy_link` from (`tbl_app_category` `a` join `tbl_application` `b` on(`a`.`app_id` = `b`.`app_id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_app_category`
--
DROP TABLE IF EXISTS `view_app_category`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_app_category`  AS  select `tbl_application`.`app_id` AS `app_id`,`tbl_application`.`app_name` AS `app_name`,`tbl_application`.`icon_image` AS `icon_image`,`tbl_category`.`category_name` AS `category_name` from ((`tbl_application` join `tbl_category`) join `tbl_app_category`) where `tbl_application`.`app_id` = `tbl_app_category`.`app_id` and `tbl_app_category`.`category_id` = `tbl_category`.`category_id` ;

-- --------------------------------------------------------

--
-- Structure for view `view_app_data_count`
--
DROP TABLE IF EXISTS `view_app_data_count`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_app_data_count`  AS  select `tbl_app_data_type`.`app_id` AS `app_id`,count(0) AS `d_count` from `tbl_app_data_type` group by `tbl_app_data_type`.`app_id` ;

-- --------------------------------------------------------

--
-- Structure for view `view_app_data_type`
--
DROP TABLE IF EXISTS `view_app_data_type`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_app_data_type`  AS  select `tbl_app_data_type`.`app_id` AS `app_id`,`tbl_data_type`.`data_type_name` AS `data_type_name` from (`tbl_app_data_type` join `tbl_data_type` on(`tbl_data_type`.`data_type_id` = `tbl_app_data_type`.`data_type_id`)) order by `tbl_app_data_type`.`app_id` ;

-- --------------------------------------------------------

--
-- Structure for view `view_app_privacy_officer`
--
DROP TABLE IF EXISTS `view_app_privacy_officer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_app_privacy_officer`  AS  select `tbl_app_officer`.`app_id` AS `app_id`,`tbl_privacy_officer`.`contact_link` AS `contact_link`,`tbl_privacy_officer`.`email_address` AS `email_address`,`tbl_privacy_officer`.`first_line` AS `first_line`,`tbl_privacy_officer`.`second_line` AS `second_line`,`tbl_privacy_officer`.`third_line` AS `third_line`,`tbl_privacy_officer`.`fourth_line` AS `fourth_line` from (`tbl_app_officer` join `tbl_privacy_officer` on(`tbl_app_officer`.`privacy_officer_id` = `tbl_privacy_officer`.`privacy_officer_id`)) order by `tbl_app_officer`.`app_id` ;

-- --------------------------------------------------------

--
-- Structure for view `view_dashboard`
--
DROP TABLE IF EXISTS `view_dashboard`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_dashboard`  AS  select `view_app_category`.`app_id` AS `app_id`,`view_app_category`.`app_name` AS `app_name`,`view_app_category`.`icon_image` AS `icon_image`,`view_app_category`.`category_name` AS `category_name`,`view_app_data_count`.`d_count` AS `d_count` from (`view_app_category` join `view_app_data_count` on(`view_app_category`.`app_id` = `view_app_data_count`.`app_id`)) ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_app_category`
--
ALTER TABLE `tbl_app_category`
  ADD CONSTRAINT `tbl_app_category_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `tbl_application` (`app_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_app_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_app_data_removal`
--
ALTER TABLE `tbl_app_data_removal`
  ADD CONSTRAINT `tbl_app_data_removal_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `tbl_application` (`app_id`);

--
-- Constraints for table `tbl_app_data_type`
--
ALTER TABLE `tbl_app_data_type`
  ADD CONSTRAINT `tbl_app_data_type_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `tbl_application` (`app_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_app_data_type_ibfk_2` FOREIGN KEY (`data_type_id`) REFERENCES `tbl_data_type` (`data_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_app_data_usage`
--
ALTER TABLE `tbl_app_data_usage`
  ADD CONSTRAINT `tbl_app_data_usage_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `tbl_application` (`app_id`);

--
-- Constraints for table `tbl_app_officer`
--
ALTER TABLE `tbl_app_officer`
  ADD CONSTRAINT `tbl_app_officer_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `tbl_application` (`app_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_app_officer_ibfk_2` FOREIGN KEY (`privacy_officer_id`) REFERENCES `tbl_privacy_officer` (`privacy_officer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_app_update`
--
ALTER TABLE `tbl_app_update`
  ADD CONSTRAINT `tbl_app_update_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `tbl_application` (`app_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_app_update_ibfk_3` FOREIGN KEY (`content_id`) REFERENCES `tbl_content` (`content_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_content`
--
ALTER TABLE `tbl_content`
  ADD CONSTRAINT `tbl_content_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `tbl_admin` (`admin_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_intersting_news`
--
ALTER TABLE `tbl_intersting_news`
  ADD CONSTRAINT `tbl_intersting_news_ibfk_1` FOREIGN KEY (`content_id`) REFERENCES `tbl_content` (`content_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_privacy_law`
--
ALTER TABLE `tbl_privacy_law`
  ADD CONSTRAINT `tbl_privacy_law_ibfk_1` FOREIGN KEY (`content_id`) REFERENCES `tbl_content` (`content_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_privacy_tip`
--
ALTER TABLE `tbl_privacy_tip`
  ADD CONSTRAINT `tbl_privacy_tip_ibfk_1` FOREIGN KEY (`content_id`) REFERENCES `tbl_content` (`content_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_suggestion`
--
ALTER TABLE `tbl_suggestion`
  ADD CONSTRAINT `tbl_suggestion_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_common_user` (`common_user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
