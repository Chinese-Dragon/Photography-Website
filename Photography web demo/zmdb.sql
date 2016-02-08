-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2015 at 05:48 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `zmdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE IF NOT EXISTS `page` (
  `pageID` varchar(50) NOT NULL,
  `photoID` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `thumb1` varchar(50) NOT NULL,
  `thumb2` varchar(50) NOT NULL,
  `thumb3` varchar(50) NOT NULL,
  PRIMARY KEY (`pageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE IF NOT EXISTS `photo` (
  `photoID` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `artist` varchar(50) NOT NULL,
  `date_taken` date NOT NULL,
  `file_name` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`photoID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`photoID`, `title`, `description`, `artist`, `date_taken`, `file_name`, `category`) VALUES
('anglerFish', 'Angler Fish', 'The harmless terror of the depths.', 'jfb-levage.com', '2015-12-02', 'img/animals/anglerFish.jpg', 'animal'),
('autobahn', 'Autobahn', 'Because speed limits weren''t created for any useful reason.', 'imax3d.deviantart.com', '2015-12-02', 'img/landscapes/autobahn.jpg', 'landscape'),
('canadian', 'Canadian', 'The inimitable Dave Foley.', 'www.thecurrent.org', '2015-12-02', 'img/animals/canadian.jpg', 'animal'),
('cliffsOfMoher', 'Cliffs of Moher', 'Ireland''s favorite suicide spot!', 'www.cliffsofmoherretreat.com', '2015-12-02', 'img/landscapes/cliffsOfMoher.jpg', 'landscape'),
('elCamino', 'El Camino', 'For the indecisive.', 'commons.wikimedia.org', '2015-12-02', 'img/cars/elCamino.jpg', 'car'),
('fuji', 'Fuji', 'We didn''t include enough Japan out of the gate.', 'famouswonders.com', '2015-12-02', 'img/landscapes/fuji.jpg', 'landscape'),
('manhattan', 'Manhattan', 'A prime example of our level of creativity.', 'hdwallpapers.cat', '2015-12-03', 'img/jb.jpg', 'landscape'),
('marmot', 'Marmot', 'His cuddly majesty.', 'en.wikipedia.org', '2015-12-02', 'img/animals/marmot.jpg', 'animal'),
('modelT', 'Model T', 'Model T-rrific.', 'www.thehenryford.org', '2015-12-02', 'img/cars/modelT.jpg', 'car'),
('mustang', 'Mustang', 'Just like your boyfriend: Not non-descript, and certainly very interesting.', 'www.mustangdreams.com', '2015-12-02', 'img/cars/mustang.jpg', 'car'),
('sugarGlider', 'Sugar Glider', 'Would that the wind would be my vessel.', 'hubpages.com', '2015-12-02', 'img/animals/sugarGlider.jpg', 'animal'),
('superBee', 'Super Bee', 'Everyone''s dad''s favorite car.', 'thertgarage.com', '2015-12-02', 'img/cars/superBee.jpg', 'car'),
('tokyo', 'Tokyo', 'When you get tired of nature...', '7-themes.com', '2015-12-02', 'img/landscapes/tokyo.jpg', 'landscape');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `name` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `email`, `password`) VALUES
('abcd', 'abcd@gmail.com', '$2y$10$pc4I48u5j8AHiQJGCF9q1e9LZND/MVBjTMtS3MPVVZSV10I7BEOyG'),
('Jaehwi Park', 'eric9788@naver.com', '$2y$10$/Q0gWe3H1/R/7rHtbFF6V.ALcYhP/R0THm.QU6s3AEHqt96i9b5Hu'),
('handsomemark', 'ericparkjay@gmail.com', '$2y$10$4XLKu0EoZ9ksqKDBqA2hQ.Q6Qt1RPhsKoRLfutKvH2OHNPWmwiV72'),
('Josh', 'jjharrold501@gmail.com', '$2y$10$4ur0MzxnlpKke373.NvZ/ubZqbHi0/R8qZgBHJokHJaGKZCRsDPru'),
('Leo Van Deuren', 'lvandeuren@drury.edu', '$2y$10$QouFp1mP8j8EpsW3E.8Mtu/5fOJZXJ.L5pmKnw5c9IQvMK.iiolJS'),
('ZAch', 'mama@qq.com', '$2y$10$mzzwdMX0Z4ZObkI17GWC8uDnfcu1nqjKsdcgoFj0lLW0y8pT4tP2m'),
('Mark', 'mark@qq.com', '$2y$10$PozEOtItgvrVdlvxy5cYJufog440tM1BaS5MBm5cMf.yTzbKHkEZ.'),
('ghgh', 'nhjnj@qq.com', '$2y$10$t4eo/0JUTY4X0wvh4XpFou3dca8Qh2occKq2ng1rNhvA8W64lust2'),
('dsa', 'sdad@qq.com', '$2y$10$nT1QCF/bG3t90EhXFZUzXuuNLQYexs2bNOhYpqze6HKSC1Mt9MviW'),
('ssigman', 'ss@d.org', '$2y$10$oDJcMK16aVhrVydbdFEPPOWyZv45PCNVzq7bCFk1b4o5iFtQHSYO.'),
('Andrew', 'totallyreal@email.com', '$2y$10$G8IBaO/hnsKdi4uoP0JJKeKDqi/puus9l5dZHb1gwHz6HRjXaxTlG'),
('Andrew', 'totallyrealemai@email.com', '$2y$10$Lr7AWPtummqGnwnqwwVck.Eav.Hg7nDlKGDjrh4ukHfIp./Ky4OeW'),
('Mark', 'yma004@drury.edu', '$2y$10$4O5lnrUl0iSirmzrQktNN.tYUJfwrgr0HvgGW.tFyJT7dwRBz42Q6'),
('Mark', 'zach@qq.com', '$2y$10$IQMDwX6xgO1IJBj9BUDlYuYi4ZiEBT4M1FR4GQBYlcoCswrFrttN6'),
('Zach Green', 'zachcrownoversux@gmail.com', '$2y$10$FR7ilwRQqBbJhuw5yS4Slu/2NcFrJeA2IthmWl5tcqriFagC6SHDm'),
('Zach Green', 'zachcrownoversuxs@gmail.com', '$2y$10$RXPLEiR8C/NYH64JS3VoWObSJBZu8TMQosEt.0OW/ldSp7XJfTktm'),
('Zachary Crownover', 'zgcrowno@gmail.com', '$2y$10$q6Q0lhMNLglD1174qtv.HuX3acr5bptndRiHs6qFPAz0Ehex8HKDy'),
('dsadsa', 'zzz@qq.com', '$2y$10$f0ZJT0nMB5.w2A7qt2Bq2us4HurU9y6ACsnHAaY/XGl8K3hDpZSh.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
