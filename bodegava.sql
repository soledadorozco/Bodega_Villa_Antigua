-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-08-2022 a las 17:04:58
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bodegava`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` text NOT NULL,
  `Subtitulo` text NOT NULL,
  `Cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `Titulo`, `Subtitulo`, `Cuerpo`) VALUES
(1, '¿Por qué es interesante tener uvas de distintos terroirs?', 'Con el terruño como punto de partida para obtener ejemplares únicos y singulares', 'El concepto de terroir representa la columna vertebral de la vitivinicultura actual y de nuestra filosofía de elaboración: para nosotros, tal como dice el Ing. Rafael Maturanno (p), el vino nace en la finca. La interacción entre el microclima, el suelo, la geografía, las vides y el trabajo humano en un sitio determinado otorga al vino un carácter y una personalidad específica que se percibe a través de sus aromas, sabores y texturas.'),
(2, 'Chardonnay y Sauvignon Blanc: 7 claves para diferenciarlas', 'Sauvignon Blanc y Chardonnay. Cepas blancas más consumidas en la Argentina.', 'Mayo es el mes de los cepajes blancos por excelencia: mientras que el sábado 7 se              celebra en todo el mundo el Día del Sauvignon Blanc, el jueves 26 es el Día Internacional del Chardonnay. Más allá de ser dos de las variedades para la elaboración de vinos más importantes del mundo, también son las cepas blancas más consumidas en la Argentina.\r\n Las uvas Chardonnay y Sauvignon Blanc tienen mucho en común: ambas son de origen francés, están implantadas en prácticamente todos los terruños prestigiosos del planeta, y en nuestro país continúan creciendo a paso firme en términos de calidad. Sin embargo, también son muy diferentes entre sí por su tipicidad; por lo tanto, también proponen distintos maridajes y situaciones de consumo.'),
(3, '24 de noviembre: Día del Vino Argentino | Mendoza ¡Espíritu Grande!', 'Para los argentinos el vino es parte de nuestra identidad cultural.', 'Al igual que el tango, el asado y la Cordillera de los Andes, es un ícono que nos representa y un embajador de la Argentina fronteras afuera. Con el Malbec como punta de lanza, los tintos y blancos nacionales seducen a los consumidores del mundo entero. Pero además, la vitivinicultura es un gran motor                 turístico para el país; las propuestas turísticas de las bodegas -cada vez más                    sofisticadas- en el marco de los paisajes andinos, convocan turistas de los cinco                    continentes maravillados por los aromas y sabores de nuestros vinos. \r\n\r\n Desde el 24 de noviembre de 2010, cuando fue declarado por decreto presidencial como Bebida Nacional, cada año se conmemora en esta fecha el Día del Vino Argentino.\r\nEsta celebración tiene como objetivo destacar el valor del vino y la                    vitivinicultura, su arraigo en nuestra tierra y su valor cultural como elemento                    identitario. Así, la Argentina se convirtió en el único país del mundo que declaró al vino que se elabora en su territorio como la bebida nacional.'),
(4, '7 datos para entender el éxito del Malbec en el mundo.', 'A partir de 2003 comenzó el “boom” de las exportaciones de Malbec fronteras afuera.', 'De acuerdo con las estadísticas difundidas por el Observatorio Vitivinícola Argentino (OVA), con un incremento constante de las hectáreas implantadas con esta variedad en el territorio nacional y un aumento                    permanente de la producción, a en el año 2002 Argentina exportaba 6,6 millones de litros de malbec, por un valor de USD 14.446.757. En 2003 se vendieron al exterior 10,2 millones de litros por USD 23 millones y en 2004 se produjo un fenómeno sin igual hasta el día de hoy: las exportaciones de Malbec crecieron 142% en valor -logrando una facturación de USD 55,9 millones- y 124% en volumen, alcanzando los 23 millones de litros. Desde ese entonces, los envíos de este varietal al exterior siguieron               aumentando todos los años, con Estados Unidos como principal comprador.'),
(11, '¿Qué nos dice la vendimia 2022 de los varietales que encabezan la producción?', 'En Bodega Villa Antigua, la cosecha empezó a principios del mes de febrero.', 'Tras un invierno y una primavera en 2021 con un clima beneficioso para el desarrollo de la vid. En el mes de febrero comienza el momento más importante del año para la industria vitivinícola: la vendimia. El resultado del trabajo de 12 meses en las fincas se materializa en la cosecha, la conclusión del ciclo anual de la vid. La obtención de uvas sanas, en su punto justo de madurez, es indispensable para elaborar vinos de alta calidad.'),
(12, '¿Por qué los blends encarnan el estilo de una bodega?', 'Un gran blend es un minucioso trabajo autoral.', 'A simple vista, la primera impresión que tenemos sobre un vino es si es un tinto, un blanco, un rosado o un espumante. Sin embargo, hay una segunda división profunda en el mundo de la vitivinicultura: los varietales y blends. Los varietales son aquellos vinos elaborados con -al menos- un 85% de un mismo cepaje; en cambio, los blends (o                    vinos de corte) son creados a partir de dos o más variedades de uva. Son los ejemplares más característicos del Viejo Mundo, ya que la mayor parte de los vinos emblemáticos de Europa son producto de la mezcla entre distintas cepas                   provenientes de un mismo terroir.'),
(13, 'Tendencia: Vinos de aperitivo.', 'Los protagonistas: vinos blancos y rossè.', 'En los últimos años las generaciones más jóvenes tomaron esta tradición de sus padres y abuelos y la convirtieron en una verdadera tendencia que -más allá del clásico vermouth- tiene a los vinos como                    protagonistas. El aperitivo es una costumbre muy arraigada en nuestro país que tiene sus orígenes en la inmigración europea de comienzos del siglo XX. Sin embargo, en los últimos años las generaciones más jóvenes tomaron esta tradición de sus padres y abuelos y la                    convirtieron en una verdadera tendencia que -más allá del clásico vermouth- tiene a los vinos como protagonistas.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'soledad', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
