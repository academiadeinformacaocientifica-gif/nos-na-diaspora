// Notícias reais do Jornal de Angola - Janeiro/Fevereiro 2024
import heroNews1 from '@/assets/hero-news-1.jpg';
import newsEconomy from '@/assets/news-economy.jpg';
import newsPolitics from '@/assets/news-politics.jpg';
import newsSociety from '@/assets/news-society.jpg';
import newsHealth from '@/assets/news-health.jpg';
import newsTech from '@/assets/news-tech.jpg';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  categorySlug: string;
  isFeatured?: boolean;
  images?: string[];
  date: string;
  author: string;
}

export const featuredNews: NewsArticle = {
  id: '1',
  title: 'Transferência para Aeroporto António Agostinho Neto encerra esta segunda-feira',
  excerpt: 'O processo de transferência das operações de voos da pista do 4 de Fevereiro, em Luanda, para o Aeroporto Dr António Agostinho Neto, em Icolo e Bengo, encerra esta segunda-feira.',
  content: `O processo de transferência das operações de voos da pista do 4 de Fevereiro, em Luanda, para o Aeroporto Dr António Agostinho Neto, em Icolo e Bengo, encerrou esta segunda-feira, marcando um capítulo histórico na aviação civil angolana.

A nova infraestrutura, construída com investimento superior a quatro mil milhões de dólares, conta com capacidade para receber até 15 milhões de passageiros por ano, e posiciona Angola como um dos principais hubs aeronáuticos de África Austral.

"Este aeroporto é um símbolo do nosso compromisso com a modernização e com o desenvolvimento económico sustentável do país", declarou o Ministro dos Transportes durante a cerimónia de inauguração.

A TAAG e companhias internacionais já operam a partir das novas instalações, que incluem dois terminais de passageiros, área de carga de alta capacidade e sistema automatizado de tratamento de bagagem. O antigo aeroporto do 4 de Fevereiro será reconvertido para aviação geral e helicópteros.

Especialistas do sector prevêem um aumento de 40% no tráfego aéreo nos próximos cinco anos, com a abertura de novas rotas directas para destinos europeus, asiáticos e norte-americanos.`,
  image: heroNews1,
  category: 'Economia',
  categorySlug: 'economia',
  date: '2 de Fevereiro, 2026',
  author: 'Jornal de Angola',
};

export const latestNews: NewsArticle[] = [
  {
    id: '2',
    title: 'Presidente João Lourenço no Dubai para Cimeira de líderes sobre governação',
    excerpt: 'Presidente da República, João Lourenço, chegou ao princípio da noite desta segunda-feira, na cidade do Dubai, onde vai participar no encontro global de líderes consagrado à governação.',
    content: `O Presidente da República de Angola, João Lourenço, chegou ao princípio da noite desta segunda-feira à cidade do Dubai, nos Emirados Árabes Unidos, onde irá participar no World Government Summit, o maior encontro de líderes globais dedicado à governação e políticas públicas.

O encontro, que reúne anualmente chefes de Estado, ministros, CEOs e especialistas de mais de 150 países, centra-se este ano nos temas da inteligência artificial ao serviço dos governos, da sustentabilidade e da transformação digital do sector público.

"Angola tem muito a partilhar e muito a aprender neste fórum", afirmou o assessor de impárensa presidencial, adiantando que o Presidente aproveitará a ocasião para reunirem bilateralmente com líderes de países parceiros.

Na agenda constam também encontros com directores executivos de grandes grupos internacionais com interesse em investir em Angola, nomeadamente nos sectores de energia renovável, tecnologia e infraestruturas.`,
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '3',
    title: 'Semana Nacional de Estatística reforça papel dos dados na consolidação do planeamento',
    excerpt: 'A Semana Nacional de Estatística 2024, que decorrerá de 6 a 9 deste mês, constitui um marco estratégico no reforço da cultura de decisão baseada em evidência em Angola.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2024',
    author: 'Jornal de Angola',
  },
  {
    id: '4',
    title: 'Especialistas debatem mecanismos para protecção dos Direitos da Criança',
    excerpt: 'Magistrados dos Tribunais Supremos e Constitucionais Africanos debatem os mecanismos constitucionais que asseguram a promoção e a protecção dos direitos fundamentais da jovem mulher e da criança em África.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '5',
    title: 'Desembolsados 449 milhões de euros para o Turismo',
    excerpt: 'O Governo de Angola vai desembolsar 449 milhões de euros para a criação de infra-estruturas de aprimoramento do Pólo de Desenvolvimento Turístico de Cabo Ledo e do corredor costeiro do país.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '6',
    title: 'Tribunal Constitucional promove Fórum sobre direitos da mulher e da criança',
    excerpt: 'Tribunal Constitucional organiza evento para debater direitos fundamentais da mulher e da criança no contexto angolano.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '7',
    title: 'Arranca esta segunda-feira em Luanda campanha de vacinação contra cancro de útero',
    excerpt: 'Campanha de vacinação contra o cancro do colo do útero inicia em Luanda, visando proteger a saúde das mulheres angolanas.',
    image: newsHealth,
    category: 'Saúde',
    categorySlug: 'saude',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const economyNews: NewsArticle[] = [
  {
    id: '8',
    title: 'Transferência para Aeroporto António Agostinho Neto encerra esta segunda-feira',
    excerpt: 'O processo de transferência das operações de voos da pista do 4 de Fevereiro, em Luanda, para o Aeroporto Dr António Agostinho Neto, em Icolo e Bengo, encerra esta segunda-feira.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '9',
    title: 'Desembolsados 449 milhões de euros para o Turismo',
    excerpt: 'O Governo de Angola vai desembolsar 449 milhões de euros para a criação de infra-estruturas de aprimoramento do Pólo de Desenvolvimento Turístico de Cabo Ledo e do corredor costeiro do país.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '10',
    title: 'Semana Nacional de Estatística reforça papel dos dados na consolidação do planeamento',
    excerpt: 'A Semana Nacional de Estatística 2026, que decorrerá de 6 a 9 deste mês, constitui um marco estratégico no reforço da cultura de decisão baseada em evidência em Angola.',
    image: newsTech,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '11',
    title: 'Executiva aposta na inclusão da mulher no sector Petrolífero',
    excerpt: 'Iniciativas para promover a participação feminina no sector petrolífero ganham força com novas políticas de inclusão.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '12',
    title: 'Empresas reafirmam fomento de negócios',
    excerpt: 'Sector empresarial angolano reafirma compromisso com o desenvolvimento económico e fomento de novos negócios.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '13',
    title: 'Cuanza-Norte: Samba-Lucala aposta na produção de feijão',
    excerpt: 'Município de Samba-Lucala investe na produção agrícola com foco no cultivo de feijão para fortalecer a economia local.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '14',
    title: 'Projecto KUMA capacita 929 jovens em várias especialidades em Cabinda',
    excerpt: 'Programa de capacitação profissional forma centenas de jovens em Cabinda, contribuindo para a empregabilidade na região.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '15',
    title: 'Indústria extractiva no país desafiada a investir na Inteligência Artificial',
    excerpt: 'Sector extractivo angolano é convidado a modernizar operações através da adopção de tecnologias de inteligência artificial.',
    image: newsTech,
    category: 'Economia',
    categorySlug: 'economia',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '16',
    title: 'Sector Petrolífero: Primeira-Dama da República realça contributo das mulheres',
    excerpt: 'Primeira-Dama destaca o papel fundamental das mulheres no desenvolvimento do sector petrolífero angolano.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '30 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '17',
    title: 'Embaixador do Zimbabwe em Angola defende a retoma dos voos da TAAG para Harare',
    excerpt: 'Diplomata zimbabweano apela para o restabelecimento das ligações aéreas entre Luanda e Harare.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '29 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '18',
    title: 'Destacadas conquistas registadas no sector dos Hidrocarbonetos',
    excerpt: 'Sector dos hidrocarbonetos celebra avanços significativos na produção e exploração de recursos energéticos.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '28 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '19',
    title: 'Inteligência artificial já é aplicada na banca',
    excerpt: 'Bancos angolanos adoptam soluções de inteligência artificial para melhorar serviços e eficiência operacional.',
    image: newsTech,
    category: 'Economia',
    categorySlug: 'economia',
    date: '28 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '20',
    title: 'Factura electrónica vai premiar carros e casas para contribuintes',
    excerpt: 'Novo sistema de factura electrónica inclui sorteios de prémios como incentivo à formalização fiscal.',
    image: newsEconomy,
    category: 'Economia',
    categorySlug: 'economia',
    date: '28 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const politicsNews: NewsArticle[] = [
  {
    id: '21',
    title: 'Presidente João Lourenço no Dubai para Cimeira de líderes sobre governação',
    excerpt: 'Presidente da República, João Lourenço, chegou ao princípio da noite desta segunda-feira, na cidade do Dubai, onde vai participar no encontro global de líderes consagrado à governação.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '22',
    title: 'Tribunal Constitucional promove Fórum sobre direitos da mulher e da criança',
    excerpt: 'Tribunal Constitucional organiza evento para debater direitos fundamentais da mulher e da criança no contexto angolano.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '23',
    title: 'Especialistas debatem mecanismos para protecção dos Direitos da Criança',
    excerpt: 'Magistrados dos Tribunais Supremos e Constitucionais Africanos debatem os mecanismos constitucionais que asseguram a promoção e a protecção dos direitos fundamentais da jovem mulher e da criança em África.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '24',
    title: '"OMA representa um dos pilares fundamentais na defesa dos direitos das mulheres no país"',
    excerpt: 'A secretária-geral da OMA afirmou que a organização feminina do MPLA se consolidou como um dos pilares fundamentais na defesa dos direitos das mulheres, actuando em áreas como educação cívica e participação política.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '25',
    title: 'João Lourenço quer mais voz de mulheres e jovens nos processos de paz em África',
    excerpt: 'O Presidente em exercício da União Africana, João Lourenço, defendeu a criação de mais espaço para as mulheres e jovens nos processos de resolução de conflitos em África.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '26',
    title: 'Secretário de Estado para Administração Pública trabalha no Cunene',
    excerpt: 'Secretário de Estado realiza visita de trabalho à província do Cunene para avaliar necessidades administrativas.',
    image: newsPolitics,
    category: 'Política',
    categorySlug: 'politica',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const societyNews: NewsArticle[] = [
  {
    id: '27',
    title: 'Bombeiros registam sete mortos e 37 feridos no fim-de-semana',
    excerpt: 'Serviços de emergência reportam ocorrências graves durante o fim-de-semana em todo o território nacional.',
    image: newsSociety,
    category: 'Sociedade',
    categorySlug: 'sociedade',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '28',
    title: 'Campanha "BI da Kianda" encerra com 332 cidadãos em Talatona',
    excerpt: 'Iniciativa de registo civil beneficia centenas de cidadãos no município de Talatona.',
    image: newsSociety,
    category: 'Sociedade',
    categorySlug: 'sociedade',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '29',
    title: 'Jovens adventistas debatem carreira e desenvolvimento nacional',
    excerpt: 'Encontro de jovens adventistas aborda temas de desenvolvimento profissional e contribuição para o progresso de Angola.',
    image: newsSociety,
    category: 'Sociedade',
    categorySlug: 'sociedade',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '30',
    title: 'Huambo defende educação inclusiva como instrumento essencial para transformação social',
    excerpt: 'Província do Huambo promove debate sobre a importância da educação inclusiva no desenvolvimento social.',
    image: newsSociety,
    category: 'Sociedade',
    categorySlug: 'sociedade',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '31',
    title: 'Detido na Lunda-Norte congolês acusado de introduzir moeda falsa no mercado nacional',
    excerpt: 'Autoridades prendem cidadão estrangeiro suspeito de falsificação de moeda no norte do país.',
    image: newsSociety,
    category: 'Sociedade',
    categorySlug: 'sociedade',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const technologyNews: NewsArticle[] = [
  {
    id: '32',
    title: 'Indústria extractiva no país desafiada a investir na Inteligência Artificial',
    excerpt: 'Sector extractivo angolano é convidado a modernizar operações através da adopção de tecnologias de inteligência artificial.',
    image: newsTech,
    category: 'Tecnologia',
    categorySlug: 'tecnologia',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '33',
    title: 'Inteligência artificial já é aplicada na banca',
    excerpt: 'Bancos angolanos adoptam soluções de inteligência artificial para melhorar serviços e eficiência operacional.',
    image: newsTech,
    category: 'Tecnologia',
    categorySlug: 'tecnologia',
    date: '28 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '34',
    title: 'Semana Nacional de Estatística reforça papel dos dados na consolidação do planeamento',
    excerpt: 'Evento destaca a importância dos dados de qualidade na formulação, monitorização e avaliação das políticas públicas.',
    image: newsTech,
    category: 'Tecnologia',
    categorySlug: 'tecnologia',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '35',
    title: 'Factura electrónica vai premiar carros e casas para contribuintes',
    excerpt: 'Novo sistema digital de facturação inclui incentivos fiscais e sorteios para promover a formalização.',
    image: newsTech,
    category: 'Tecnologia',
    categorySlug: 'tecnologia',
    date: '28 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const healthNews: NewsArticle[] = [
  {
    id: '36',
    title: 'Arranca esta segunda-feira em Luanda campanha de vacinação contra cancro de útero',
    excerpt: 'Campanha de vacinação contra o cancro do colo do útero inicia em Luanda, visando proteger a saúde das mulheres angolanas.',
    image: newsHealth,
    category: 'Saúde',
    categorySlug: 'saude',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '37',
    title: 'Mpox deixa de ser um caso de emergência de saúde pública no continente africano',
    excerpt: 'Organização de saúde anuncia que a doença já não representa emergência sanitária em África.',
    image: newsHealth,
    category: 'Saúde',
    categorySlug: 'saude',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '38',
    title: 'Doenças Tropicais Negligenciadas: um desafio inadiável para a saúde e o desenvolvimento de Angola',
    excerpt: 'Especialistas alertam para a necessidade de maior investimento no combate às doenças tropicais no país.',
    image: newsHealth,
    category: 'Saúde',
    categorySlug: 'saude',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const worldNews: NewsArticle[] = [
  {
    id: '39',
    title: 'Fronteira entre Gaza e Egipto reaberta condicionalmente',
    excerpt: 'Passagem fronteiriça entre Gaza e Egipto volta a funcionar sob condições especiais.',
    image: newsPolitics,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '40',
    title: 'Moçambique alerta para chuvas fortes no norte do país',
    excerpt: 'Autoridades moçambicanas emitem alerta meteorológico para precipitação intensa na região norte.',
    image: newsSociety,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '41',
    title: 'Rússia confirma nova ronda de negociações na quarta e quinta-feira',
    excerpt: 'Governo russo anuncia continuação das conversações diplomáticas durante a semana.',
    image: newsPolitics,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '42',
    title: 'Banco Africano de Desenvolvimento doa um milhão de dólares a grupo marroquino',
    excerpt: 'BAD apoia iniciativa marroquina com doação significativa para projectos de desenvolvimento.',
    image: newsEconomy,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '43',
    title: 'União Africana pede contenção em Tigray',
    excerpt: 'Organização continental apela à calma e ao diálogo na região etíope de Tigray.',
    image: newsPolitics,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '44',
    title: 'Rei zulu exige a saída de estrangeiros do país',
    excerpt: 'Líder tradicional sul-africano faz declarações polémicas sobre imigração.',
    image: newsPolitics,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '45',
    title: 'Níger culpa franceses por ataque em Niamey',
    excerpt: 'Governo nigerino atribui responsabilidade à França por incidente de segurança na capital.',
    image: newsPolitics,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '46',
    title: 'Médicos Sem Fronteiras vão deixar de operar em Gaza no dia 28 deste mês',
    excerpt: 'Organização humanitária anuncia encerramento de operações no território palestiniano.',
    image: newsHealth,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '47',
    title: 'Moçambique: Restabelecida ligação terrestre entre o sul e o norte do país',
    excerpt: 'Conectividade rodoviária é restaurada após trabalhos de reparação de infra-estruturas.',
    image: newsSociety,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '48',
    title: 'Guiné-Bissau: Família de Simões Pereira afirma estar sob restrições',
    excerpt: 'Familiares de político guineense denunciam limitações à sua liberdade de movimento.',
    image: newsPolitics,
    category: 'Mundo',
    categorySlug: 'mundo',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const ambienteNews: NewsArticle[] = [
  {
    id: '49',
    title: 'Angola avança com plano nacional de reflorestamento de dois milhões de hectares',
    excerpt: 'O Executivo angolano aprovou um ambicioso programa de reflorestamento que visa recuperar áreas degradadas e combater a desertificação no sul do país.',
    content: `O Governo de Angola aprovou um plano nacional de reflorestamento que prevê o plantio de árvores em dois milhões de hectares ao longo da próxima década, numa iniciativa que coloca o país entre os mais ambiciosos do continente africano em matéria de ambiente.

O programa, coordenado pelo Ministério do Ambiente, incluirá espécies endémicas angolanas como o Imbondeiro e o Pau-Rosa, com especial ênfase nas regiões do sul, mais afectadas pela seca e pela desertificação.

"Este plano é uma resposta directa às alterações climáticas e ao legado de décadas de degradação ambiental", afirmou a Ministra do Ambiente, acrescentando que a iniciativa criará mais de 30.000 postos de trabalho verdes.

A iniciativa conta com apoio técnico da FAO e financiamento do Fundo Verde para o Clima, e será implementada em parceria com comunidades locais, que receberão formação em gestão florestal sustentável.`,
    image: newsSociety,
    category: 'Ambiente',
    categorySlug: 'ambiente',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '50',
    title: 'Luanda reduz emissões com frota de autocarros eléctricos',
    excerpt: 'Capital angolana recebe primeiros autocarros eléctricos do programa de mobilidade urbana sustentável, contribuindo para a redução da poluição atmosférica.',
    image: newsTech,
    category: 'Ambiente',
    categorySlug: 'ambiente',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '51',
    title: 'Parque Nacional da Cangandala regista aumento de população de palancas-negras',
    excerpt: 'Esforços de conservação da palanca-negra gigante, símbolo nacional de Angola, começam a dar frutos com crescimento da população no parque.',
    image: newsSociety,
    category: 'Ambiente',
    categorySlug: 'ambiente',
    date: '31 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const industriaNews: NewsArticle[] = [
  {
    id: '52',
    title: 'Zona Económica Especial do Luio atrai 12 novos investidores estrangeiros',
    excerpt: 'A ZEE do Luio, no Moxico, consolidou-se como polo de atracção de investimento industrial com a confirmação de 12 novos projectos internacionais.',
    content: `A Zona Económica Especial do Luio, situada na província do Moxico, registou um marco histórico ao confirmar a instalação de 12 novas empresas estrangeiras, num investimento total estimado em 850 milhões de dólares.

Os novos investidores provem de Portugal, China, Brasil, Índia e Alemanha, e actuam nos sectores de transformação de madeira, agro-indústria, plásticos e materiais de construção.

"A ZEE do Luio é hoje um caso de sucesso que prova que Angola está apta a receber investimento de qualidade", sublinhou o Presidente do Conselho de Administração da ZEE, referindo que a zona emprega já mais de 8.000 trabalhadores angolanos.

O Governo prevê a criação de mais duas zonas económicas especiais nas províncias de Bié e Cunene até ao final de 2027.`,
    image: newsEconomy,
    category: 'Indústria',
    categorySlug: 'industria',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '53',
    title: 'Fábrica angolana de cimento duplica capacidade de produção',
    excerpt: 'Nova linha de produção da Cimangola eleva a capacidade da unidade industrial para 2,5 milhões de toneladas anuais, reduzindo a necessidade de importação.',
    image: newsEconomy,
    category: 'Indústria',
    categorySlug: 'industria',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '54',
    title: 'Sector pesqueiro angolano instala primeiras jaulas flutuantes de aquacultura',
    excerpt: 'Projecto piloto de aquacultura em jaulas flutuantes no litoral angolano marca o início de uma nova fase para a indústria pesqueira nacional.',
    image: newsEconomy,
    category: 'Indústria',
    categorySlug: 'industria',
    date: '30 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const culturaNews: NewsArticle[] = [
  {
    id: '55',
    title: 'Festival Luanda Jazz regressa em Fevereiro com artistas de cinco continentes',
    excerpt: 'O Festival Luanda Jazz, um dos maiores eventos musicais de África, regressa este mês com uma programação que reúne músicos de todo o mundo.',
    content: `O Festival Luanda Jazz, considerado um dos maiores e mais prestígiados festivais de jazz em África, regressa este mês com uma edição especialmente ambiciosa, reunindo artistas de cinco continentes para uma semana de concertos, masterclasses e workshops culturais.

A programação deste ano inclui nomes como Trombone Shorty, Angelique Kidjo, Maria Joaõ e o Quarteto de Luanda, que vai actuar num concerto de encerramento inesquecível no Cine-Teatro Nacional.

"O Luanda Jazz é muito mais do que música. É um diálogo entre culturas e uma celebração da criatividade angolana e mundial", destacou a directora artística do festival.

Para além dos concertos, o festival inclui exposições fotográficas, sessões de cinema documental e um mercado de artesanato angolano. As entradas estão à venda nas bilheteiras online e nos espaços culturais parceiros em toda a cidade de Luanda.`,
    image: newsSociety,
    category: 'Cultura',
    categorySlug: 'cultura',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '56',
    title: 'Museu Nacional de Angola reabre após restauro com novo acervo digital',
    excerpt: 'O Museu Nacional de Angola reabriu as suas portas após dois anos de restauro profundo, apresentando um inovador acervo digital que digitaliza o património cultural angolano.',
    image: newsSociety,
    category: 'Cultura',
    categorySlug: 'cultura',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '57',
    title: 'Escritora angolana Djaimilia Pereira de Almeida distinguida em Lisboa',
    excerpt: 'Autora angolana recebeu o Prémio PEN Portugal de Literatura pelo seu mais recente romance, consolidando o seu reconhecimento internacional.',
    image: newsSociety,
    category: 'Cultura',
    categorySlug: 'cultura',
    date: '31 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const educacaoNews: NewsArticle[] = [
  {
    id: '58',
    title: 'Angola constrói 500 novas escolas primárias em zonas rurais até 2027',
    excerpt: 'O Ministério da Educação lançou o Programa Nacional de Construção Escolar para levar educação de qualidade às comunidades mais isoladas do país.',
    content: `O Ministério da Educação de Angola lançou oficialmente o Programa Nacional de Construção Escolar, que prevê a edificação de 500 novas escolas primárias em zonas rurais de todo o país até ao final de 2027.

O programa, financiado pelo Orçamento Geral do Estado e por fundos do Banco Mundial, dará prioridade às 12 províncias com maiores taxas de desescolarização, incluindo Cuando Cubango, Moxico e Cunene.

"Nenhuma criança angolana deve estar privada do direito à educação por falta de uma escola próxima", afirmou a Ministra da Educação, acrescentando que cada escola contará com energia solar e acesso à água potável.

O programa incluirá ainda formação de 3.000 novos professores primários e dotação de manuais escolares em português e nas línguas nacionais mais faladas nas respectivas regiões.`,
    image: newsSociety,
    category: 'Educação',
    categorySlug: 'educacao',
    date: '2 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '59',
    title: 'Universidade Agostinho Neto lider rank africano de universidades emergentes',
    excerpt: 'A maior universidade de Angola foi distinguida pelo Times Higher Education como uma das universidades africanas com maior crescimento em investigação científica.',
    image: newsTech,
    category: 'Educação',
    categorySlug: 'educacao',
    date: '1 de Fevereiro, 2026',
    author: 'Jornal de Angola',
  },
  {
    id: '60',
    title: 'Programa bolsas INAGBE leva 1.200 jovens angolanos a universidades estrangeiras',
    excerpt: 'O INAGBE atribuiu bolsas de estudo a 1.200 jovens angolanos para prosseguirem formação superior em universidades de Portugal, Brasil, China e Estados Unidos.',
    image: newsSociety,
    category: 'Educação',
    categorySlug: 'educacao',
    date: '30 de Janeiro, 2026',
    author: 'Jornal de Angola',
  },
];

export const mundoNews = worldNews;

export const popularNews = [
  featuredNews,
  latestNews[0],
  economyNews[1],
  politicsNews[0],
  societyNews[0],
];
