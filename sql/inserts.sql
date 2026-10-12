CREATE DATABASE futebol_infos;

USE futebol_infos;


-- inserts para usar com o banco de dados criado pelo sequelize
-- clubes

INSERT INTO clubes (nome, pais, estadio, imagem) VALUES
('São Paulo', 'Brasil', 'MorumBIS',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Sao_Paulo_FC_crest.svg'),

('Cienciano', 'Peru', 'Inca Garcilaso de la Vega',
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/S%C3%A3o_Paulo_Futebol_Clube_logo_%282022%29.svg/250px-S%C3%A3o_Paulo_Futebol_Clube_logo_%282022%29.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Roma', 'Itália', 'Stadio Olimpico',
 'https://thumb.wikimedia.org/wikipedia/pt/thumb/8/8c/AS_Roma_logo.png/120px-AS_Roma_logo.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Besiktas', 'Turquia', 'Tüpraş Stadyumu',
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/BesiktasJK-Logo.svg/250px-BesiktasJK-Logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('River Plate', 'Argentina', 'MâS Monumental',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Club_Atl%C3%A9tico_River_Plate_logo.svg'),

('Guarani', 'Brasil', 'Brinco de Ouro da Princesa',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Guarani_Futebol_Clube_logo.svg'),

('Real Madrid', 'Espanha', 'Santiago Bernabéu',
 'https://thumb.wikimedia.org/wikipedia/pt/thumb/9/98/Real_Madrid.png/120px-Real_Madrid.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Liverpool', 'Inglaterra', 'Anfield',
 'https://thumb.wikimedia.org/wikipedia/pt/thumb/0/0c/Liverpool_FC.svg/120px-Liverpool_FC.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Boca Juniors', 'Argentina', 'La Bombonera',
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/BocaJuniors.png/120px-BocaJuniors.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Bayern de Munique', 'Alemanha', 'Allianz Arena',
 'https://commons.wikimedia.org/wiki/Special:FilePath/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg');

-- ligas

INSERT INTO ligas (nome, pais, maiorcampeao, imagem) VALUES
('Brasileirão Série A', 'Brasil', 'Palmeiras',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Campeonato_Brasileiro_S%C3%A9rie_A_logo_%282024%29.svg'),

('Premier League', 'Inglaterra', 'Manchester United',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Premier_League.svg'),

('La Liga', 'Espanha', 'Real Madrid',
 'https://commons.wikimedia.org/wiki/Special:FilePath/LaLiga_logo_%282023%29.svg'),

('Serie A', 'Itália', 'Juventus',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Serie_A_Made_in_Italy_logo.svg'),

('Bundesliga', 'Alemanha', 'Bayern de Munique',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Bundesliga_logo.svg'),

('Ligue 1', 'França', 'Paris Saint-Germain',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Ligue1.svg'),

('Primera División', 'Argentina', 'River Plate',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Liga_Profesional_de_F%C3%BAtbol_%28Argentina%29_wordmark.svg'),

('Süper Lig', 'Turquia', 'Galatasaray',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Trendyol_S%C3%BCper_Lig_logo_dikey.svg'),

('Liga Portugal', 'Portugal', 'Benfica',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Liga_Portugal_Betclic_logo.svg'),

('Eredivisie', 'Holanda', 'Ajax',
 'https://commons.wikimedia.org/wiki/Special:FilePath/Eredivisie_nieuw_logo_2017-.svg');
-- jogadores

INSERT INTO jogadores (nome, clube, posicao, nacionalidade, imagem) VALUES
('Lucas Moura', 'São Paulo', 'Atacante', 'Brasil',
 'https://img.a.transfermarkt.technology/portrait/header/77100-1654164113.jpg?lm=4711'),

('Paulo Dybala', 'Roma', 'Meia-Atacante', 'Argentina',
 'https://img.a.transfermarkt.technology/portrait/header/206050-1725530843.jpg?lm=4711'),

('Franco Mastantuono', 'River Plate', 'Meia', 'Argentina',
 'https://img.a.transfermarkt.technology/portrait/header/1057316-1755702696.jpg?lm=4711'),

('Ciro Immobile', 'Besiktas', 'Atacante', 'Itália',
 'https://img.a.transfermarkt.technology/portrait/header/105521-1770718860.jpg?lm=4711'),

('Vinícius Júnior', 'Real Madrid', 'Ponta Esquerda', 'Brasil',
 'https://img.a.transfermarkt.technology/portrait/header/371998-1790756460.jpg?lm=4711'),

('Mohamed Salah', 'Liverpool', 'Ponta Direita', 'Egito',
 'https://img.a.transfermarkt.technology/portrait/header/148455-1789399470.jpg?lm=4711'),

('Edinson Cavani', 'Boca Juniors', 'Centroavante', 'Uruguai',
 'https://img.a.transfermarkt.technology/portrait/header/48280-1739899618.jpg?lm=4711'),

('Harry Kane', 'Bayern de Munique', 'Centroavante', 'Inglaterra',
 'https://img.a.transfermarkt.technology/portrait/header/132098-1700211169.jpg?lm=4711'),

('Lautaro Martínez', 'Inter de Milão', 'Atacante', 'Argentina',
 'https://img.a.transfermarkt.technology/portrait/header/406625-1695024988.jpg?lm=4711'),

('Kylian Mbappé', 'Real Madrid', 'Atacante', 'França',
 'https://img.a.transfermarkt.technology/portrait/header/342229-1789750273.jpg?lm=4711');
-- estádios

INSERT INTO estadios (nome, clube, cidade, fundacao, imagem) VALUES
('MorumBIS', 'São Paulo', 'São Paulo', 1960,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Est%C3%A1dio_do_Morumbi.jpg/330px-Est%C3%A1dio_do_Morumbi.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Stadio Olimpico', 'Roma', 'Roma', 1953,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Stadio_Olimpico_2024.jpg/330px-Stadio_Olimpico_2024.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('MÂS Monumental', 'River Plate', 'Buenos Aires', 1938,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Estadio_mas_monumental.jpg/330px-Estadio_mas_monumental.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Tüpraş Stadyumu', 'Besiktas', 'Istambul', 2016,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/20220606-L1000240.jpg/330px-20220606-L1000240.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Brinco de Ouro', 'Guarani', 'Campinas', 1953,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Est%C3%A1dio_Brinco_de_Ouro.jpg/330px-Est%C3%A1dio_Brinco_de_Ouro.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Santiago Bernabéu', 'Real Madrid', 'Madri', 1947,
 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/Bernab-e1696859692370.jpg?w=1200&h=900&crop=1'),

('Anfield', 'Liverpool', 'Liverpool', 1884,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Liverpool_anfield_road_stadium.jpg/330px-Liverpool_anfield_road_stadium.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('La Bombonera', 'Boca Juniors', 'Buenos Aires', 1940,
 'https://dynamic-media.tacdn.com/media/photo-o/2f/af/cf/02/caption.jpg?w=700&h=500&s=1'),

('Allianz Arena', 'Bayern de Munique', 'Munique', 2005,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Allianz_Arena_2008-02-09.jpg/330px-Allianz_Arena_2008-02-09.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'),

('Garcilaso de la Vega', 'Cienciano', 'Cusco', 1958,
 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Estadio_garcilaso_cienciano.jpg/330px-Estadio_garcilaso_cienciano.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail');