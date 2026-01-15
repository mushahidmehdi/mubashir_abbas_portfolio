'use client';

import { useState } from 'react';
import {
  Mail,
  Home,
  User,
  BookOpen,
  FileText,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import styled from 'styled-components';

const GlobalWrapper = styled.div`
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif;
  color: #202122;
  min-height: 100vh;
`;

const Header = styled.header`
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #e8e8e8;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: #202122;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BreadcrumbText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9em;
  color: #202122;
  font-weight: 500;

  width: 9rem;

  @media (max-width: 768px) {
    font-size: 0.85em;
  }
`;

const UserTools = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  a {
    color: #0645ad;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.9em;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    a span {
      display: none;
    }
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;

  @media (min-width: 769px) {
    display: none;
  }
`;

const SideMenu = styled.nav`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '-280px')};
  width: 280px;
  height: 100vh;
  background: white;
  z-index: 999;
  transition: left 0.3s ease;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const SideMenuHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideMenuTitle = styled.h2`
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
  color: #202122;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: #202122;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f8f9fa;
  }
`;

const SideMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SideMenuItem = styled.li`
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const SideMenuButton = styled.button`
  width: 100%;
  background: ${(props) => (props.active ? '#f8f9fa' : 'transparent')};
  border: none;
  padding: 16px 20px;
  cursor: pointer;
  color: #202122;
  font-size: 0.95em;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  font-weight: ${(props) => (props.active ? '600' : '400')};

  &:hover {
    background: #f8f9fa;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const NavItem = styled.button`
  background: ${(props) => (props.active ? '#eaecf0' : 'transparent')};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #202122;
  font-size: 0.9em;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: #eaecf0;
  }
`;

const Container = styled.div`
  display: grid;

  max-width: 1000px;
  margin: 0 auto;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.main`
  background: white;
  border-radius: 2px;
  padding: 30px;
  width: 100%;
`;

const PageHeader = styled.div`
  border-bottom: 1px solid #a2a9b1;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 2em;
  font-weight: normal;
  margin: 0 0 5px 0;
  font-family: 'Linux Libertine', Georgia, Times, serif;
`;

const Breadcrumbs = styled.div`
  font-size: 0.85em;
  color: #54595d;

  button {
    background: none;
    border: none;
    color: #0645ad;
    cursor: pointer;
    padding: 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled.section`
  line-height: 1.6;

  h2 {
    font-size: 1.5em;
    font-weight: normal;
    margin: 25px 0 15px 0;
    border-bottom: 1px solid #a2a9b1;
    font-family: 'Linux Libertine', Georgia, Times, serif;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 20px 0 10px 0;
  }

  p {
    margin: 0 0 15px 0;
  }

  ul {
    margin: 10px 0 15px 25px;
  }

  li {
    margin: 5px 0;
  }

  a {
    color: #0645ad;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }
`;

const InfoBox = styled.div`
  float: right;
  width: 300px;
  margin: 0 0 15px 15px;
  border: 1px solid #a2a9b1;
  background: #f8f9fa;
  font-size: 0.9em;

  @media (max-width: 768px) {
    float: none;
    width: 100%;
    margin: 0 0 15px 0;
  }
`;

const InfoBoxTitle = styled.div`
  background: #eaecf0;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #a2a9b1;
`;

const InfoTable = styled.table`
  width: 100%;
  font-size: 0.9em;

  tr {
    border-bottom: 1px solid #eaecf0;
  }

  th {
    padding: 8px;
    text-align: left;
    background: #f8f9fa;
    font-weight: bold;
    width: 35%;
    vertical-align: top;
  }

  td {
    padding: 8px;
  }
`;

const HighlightBox = styled.div`
  background: #f0f7ff;
  border-left: 4px solid #3366cc;
  padding: 15px;
  margin: 20px 0;
`;

const PublicationItem = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-left: 3px solid #0645ad;

  .pub-title {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.05em;

    a {
      color: #0645ad;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .pub-authors {
    color: #54595d;
    margin-bottom: 5px;
    font-size: 0.9em;
  }

  .pub-journal {
    color: #0645ad;
    font-style: italic;
    margin-bottom: 10px;
    font-size: 0.9em;
  }

  .pub-abstract {
    font-size: 0.9em;
    line-height: 1.5;
    color: #202122;
  }

  .pub-doi {
    margin-top: 8px;
    font-size: 0.85em;

    a {
      color: #0645ad;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

const TutorialItem = styled.div`
  margin: 15px 0;
  padding: 12px;
  background: #f8f9fa;
  border-left: 3px solid #36c;

  .tutorial-title {
    font-weight: bold;
    margin-bottom: 8px;
    color: #0645ad;
  }

  .tutorial-desc {
    font-size: 0.9em;
    line-height: 1.5;
  }
`;

const CitationBadge = styled.div`
  display: inline-block;
  background: #eaf3ff;
  padding: 4px 8px;
  font-size: 0.8em;
  margin: 5px 5px 5px 0;
  color: #0645ad;
`;

// SEO Metadata Component (would be in layout.tsx in real Next.js)
const PageHead = ({ page }) => {
  const metadata = {
    home: {
      title: 'Dr. Mubashir Abbas - Cotton Genomics & Bioinformatics Researcher',
      description:
        'Postdoctoral Fellow at CAAS specializing in cotton functional genomics, population genetics, and transposable elements. 203+ citations, h-index 8.',
      keywords:
        'cotton genomics, bioinformatics, GWAS, transposable elements, plant genetics, CAAS',
    },
    introduction: {
      title: 'Research Profile - Dr. Mubashir Abbas | Cotton Genomics Expert',
      description:
        'Comprehensive academic profile covering cotton pan-genomics, stress tolerance research, and high-throughput phenotyping innovations.',
      keywords:
        'research profile, cotton genomics, pan-genome, stress tolerance, UAV phenotyping',
    },
    tutorials: {
      title: 'Bioinformatics Tutorials - NGS Analysis & Population Genetics',
      description:
        'Free bioinformatics tutorials covering sequence processing, NGS analysis, variant annotation, and population genetics. Step-by-step guides with examples.',
      keywords:
        'bioinformatics tutorials, NGS analysis, GWAS, variant annotation, Python, Perl, BWA',
    },
    publications: {
      title: 'Publications - Dr. Mubashir Abbas | 15+ Peer-Reviewed Papers',
      description:
        'Scientific publications in BMC Biology, The Plant Journal, and more. Research on cotton genomics, fiber development, and stress responses.',
      keywords:
        'scientific publications, cotton research, plant genomics, peer-reviewed papers',
    },
  };

  const meta = metadata[page] || metadata.home;

  return (
    <>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:type' content='profile' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  );
};

// Structured Data for SEO (Schema.org)
const StructuredData = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Mubashir Abbas',
    jobTitle: 'Postdoctoral Fellow',
    affiliation: {
      '@type': 'Organization',
      name: 'Chinese Academy of Agricultural Sciences',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Beijing',
        addressCountry: 'China',
      },
    },
    email: 'mubashirabbas3164@yahoo.com',
    url: 'https://scholar.google.com/citations?user=atvrp9wAAAAJ',
    sameAs: [
      'https://scholar.google.com/citations?user=atvrp9wAAAAJ',
      'https://www.researchgate.net/profile/Mubashir-Abbas',
    ],
    knowsAbout: [
      'Cotton Genomics',
      'Bioinformatics',
      'Population Genetics',
      'Transposable Elements',
      'GWAS',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
};

const App = () => {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = () => {
    switch (page) {
      case 'home':
        return 'Home';
      case 'introduction':
        return 'Research Profile';
      case 'tutorials':
        return 'Tutorials';
      case 'publications':
        return 'Publications';
      default:
        return 'Home';
    }
  };

  const getPageIcon = () => {
    switch (page) {
      case 'home':
        return <Home size={16} />;
      case 'introduction':
        return <User size={16} />;
      case 'tutorials':
        return <BookOpen size={16} />;
      case 'publications':
        return <FileText size={16} />;
      default:
        return <Home size={16} />;
    }
  };

  const renderHome = () => (
    <>
      <PageHead page={page} />
      <StructuredData />
      <PageHeader>
        <PageTitle>Dr. Mubashir Abbas</PageTitle>
        <Breadcrumbs>
          <button onClick={() => setPage('home')}>Main Page</button>
        </Breadcrumbs>
      </PageHeader>

      <InfoBox>
        <InfoBoxTitle>Dr. Mubashir Abbas</InfoBoxTitle>
        <InfoTable>
          <tbody>
            <tr>
              <th>Position</th>
              <td>Postdoctoral Fellow</td>
            </tr>
            <tr>
              <th>Institution</th>
              <td>Chinese Academy of Agricultural Sciences (CAAS), Beijing</td>
            </tr>
            <tr>
              <th>Institute</th>
              <td>Biotechnology Research Institute</td>
            </tr>
            <tr>
              <th>Field</th>
              <td>Cotton Functional Genomics & Bioinformatics</td>
            </tr>
            <tr>
              <th>Education</th>
              <td>PhD in Molecular Biology and Biochemistry</td>
            </tr>
            <tr>
              <th>Specialization</th>
              <td>
                Population genetics, domestication genes, transposable elements
              </td>
            </tr>
            <tr>
              <th>Citations</th>
              <td>203+ (Google Scholar)</td>
            </tr>
            <tr>
              <th>h-index</th>
              <td>8</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>
                <a href='mailto:mubashirabbas3164@yahoo.com'>Email</a>
                <br />
                <a
                  href='https://www.researchgate.net/profile/Mubashir-Abbas'
                  target='_blank'
                  rel='noopener'
                >
                  <ExternalLink size={12} /> ResearchGate
                </a>
                <br />
                <a
                  href='https://scholar.google.com/citations?user=atvrp9wAAAAJ'
                  target='_blank'
                  rel='noopener'
                >
                  <ExternalLink size={12} /> Google Scholar
                </a>
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </InfoBox>

      <Section>
        <p>
          <strong>Dr. Mubashir Abbas</strong> is a distinguished postdoctoral
          fellow at the{' '}
          <strong>Chinese Academy of Agricultural Sciences (CAAS)</strong> in
          Beijing, China, specializing in cotton functional genomics and
          bioinformatics. His research focuses on the population genetics of
          domestication genes and investigates how domestication, genome
          duplication, and transposable elements (TEs) have shaped cotton
          genomes.
        </p>

        <p>
          Dr. Abbas's work explores how transposable elements contribute to
          genome size expansion and structural variation, influencing gene
          expression and evolutionary adaptation in cotton species. His
          integrative approach combines computational genomics with experimental
          validation to uncover the molecular mechanisms underlying important
          agricultural traits.
        </p>

        <CitationBadge>203+ Citations</CitationBadge>
        <CitationBadge>15+ Publications</CitationBadge>
        <CitationBadge>GWAS Expert</CitationBadge>
        <CitationBadge>Big Data Analysis</CitationBadge>

        <h2>Research Focus</h2>

        <p>
          At the Biotechnology Research Institute of CAAS, Dr. Abbas leads
          innovative research projects that bridge fundamental biology with
          agricultural applications. His work addresses critical challenges in
          cotton production, including disease resistance, stress tolerance, and
          fiber quality improvement.
        </p>

        <h3>Cotton Functional Genomics</h3>
        <p>
          Dr. Abbas's primary research area involves understanding the
          functional elements of cotton genomes and how they contribute to
          phenotypic diversity. He employs cutting-edge genomic technologies and
          computational approaches to identify genes and regulatory elements
          controlling important traits such as fiber development, disease
          resistance, and environmental adaptation.
        </p>

        <h3>Population Genetics of Domestication</h3>
        <p>
          A central theme of his research is understanding how cotton has
          evolved during domestication and modern breeding. By analyzing
          population-level genomic data, he identifies signatures of selection,
          tracks the evolutionary history of key genes, and reveals how human
          selection has shaped the cotton genome over millennia.
        </p>

        <h3>Transposable Elements & Genome Evolution</h3>
        <p>
          Dr. Abbas investigates the role of transposable elements in cotton
          genome evolution. His research demonstrates how TEs contribute to:
        </p>
        <ul>
          <li>
            <strong>Genome Size Expansion:</strong> Understanding mechanisms of
            genome size variation across cotton species
          </li>
          <li>
            <strong>Structural Variation:</strong> Identifying TE-induced
            chromosomal rearrangements and their functional consequences
          </li>
          <li>
            <strong>Gene Expression Regulation:</strong> Elucidating how TEs
            influence nearby gene expression patterns
          </li>
          <li>
            <strong>Evolutionary Adaptation:</strong> Revealing TE contributions
            to cotton adaptation to diverse environments
          </li>
        </ul>

        <h2>Major Research Contributions</h2>

        <h3>Disease Resistance in Cotton</h3>
        <p>
          Dr. Abbas has made significant contributions to understanding disease
          resistance mechanisms in cotton. His work on short-chain
          dehydrogenase/reductase (SDR) genes revealed their role in conferring
          resistance to Verticillium wilt, a devastating fungal disease. This
          research identified genes that underwent adaptive selection during
          cotton domestication, providing valuable targets for breeding
          disease-resistant varieties.
        </p>

        <h3>Climate Change and Cotton Production</h3>
        <p>
          Recognizing the urgent challenges posed by climate change, Dr. Abbas
          has contributed to comprehensive reviews examining how rising
          temperatures, changing precipitation patterns, and extreme weather
          events affect cotton production. His work emphasizes genomic
          approaches for developing climate-resilient cotton varieties through
          genomic selection, gene editing, and multi-omics integration.
        </p>

        <h3>Root System Development</h3>
        <p>
          Dr. Abbas has advanced our understanding of root system genetics
          through integrating high-throughput phenotyping with genome-wide
          association studies (GWAS). His research opens new avenues for
          improving root architecture, which is critical for water and nutrient
          uptake efficiency.
        </p>

        <h3>Fiber Development Genetics</h3>
        <p>
          His comprehensive analysis of basic helix-loop-helix (bHLH)
          transcription factors in cotton has provided insights into the genetic
          diversity and functional significance of these genes in fiber
          development. This work contributes to understanding the molecular
          basis of fiber quality traits.
        </p>

        <h2>Technical Expertise</h2>

        <h3>Genomics & Bioinformatics</h3>
        <ul>
          <li>Next-generation sequencing (NGS) data analysis</li>
          <li>Genome assembly and annotation</li>
          <li>Variant calling and population genomics</li>
          <li>Transcriptome analysis (RNA-seq)</li>
          <li>Pan-genome analysis</li>
          <li>Genome-wide association studies (GWAS)</li>
          <li>Phylogenetic and evolutionary analysis</li>
        </ul>

        <h3>Computational Skills</h3>
        <ul>
          <li>Linux/Unix command-line proficiency</li>
          <li>Python programming for bioinformatics</li>
          <li>R for statistical analysis and visualization</li>
          <li>Bash scripting and pipeline development</li>
          <li>High-performance computing (HPC)</li>
          <li>Version control (Git/GitHub)</li>
        </ul>

        <h3>Molecular Biology Techniques</h3>
        <ul>
          <li>Molecular cloning and gene manipulation</li>
          <li>Plant transformation and genetic engineering</li>
          <li>RNA/DNA extraction and analysis</li>
          <li>qRT-PCR and gene expression analysis</li>
          <li>Protein expression and functional studies</li>
          <li>Phenotyping and physiological measurements</li>
        </ul>

        <h2>Impact and Recognition</h2>

        <p>
          Dr. Abbas has established himself as a productive researcher with
          numerous publications in high-impact journals including{' '}
          <em>BMC Biology</em>, <em>The Plant Journal</em>,{' '}
          <em>Frontiers in Plant Science</em>,{' '}
          <em>Journal of Cotton Research</em>, and{' '}
          <em>Industrial Crops and Products</em>. His research has been cited
          over 200 times and continues to influence cotton genomics and breeding
          programs worldwide.
        </p>

        <HighlightBox>
          <p>
            <strong>Key Achievement:</strong> Dr. Abbas's work on the cotton
            pan-genome and domestication genetics has provided valuable insights
            into the genomic foundations of cotton improvement, offering
            breeders new tools and resources for developing superior varieties.
          </p>
        </HighlightBox>

        <h2>Recent Highlights (2024-2025)</h2>
        <ul>
          <li>
            Co-authored groundbreaking UAV-based phenotyping study published in{' '}
            <em>The Plant Journal</em>
          </li>
          <li>
            Contributed to climate change impact review in{' '}
            <em>Journal of Cotton Research</em>
          </li>
          <li>
            Published comprehensive analysis on cold stress tolerance mechanisms
          </li>
          <li>
            Advanced understanding of fiber development through bHLH gene family
            analysis
          </li>
        </ul>
      </Section>
    </>
  );

  return (
    <GlobalWrapper>
      <Header>
        <Breadcrumb>
          <MenuButton onClick={() => setMenuOpen(true)}>
            <Menu size={20} />
          </MenuButton>
          <BreadcrumbText>
            {getPageIcon()}
            {getPageTitle()}
          </BreadcrumbText>
        </Breadcrumb>

        <DesktopNav>
          <NavItem
            active={page === 'home'}
            onClick={() => handleNavigation('home')}
          >
            <Home size={16} />
            Home
          </NavItem>
          <NavItem
            active={page === 'introduction'}
            onClick={() => handleNavigation('introduction')}
          >
            <User size={16} />
            Research Profile
          </NavItem>
          <NavItem
            active={page === 'tutorials'}
            onClick={() => handleNavigation('tutorials')}
          >
            <BookOpen size={16} />
            Tutorials
          </NavItem>
          <NavItem
            active={page === 'publications'}
            onClick={() => handleNavigation('publications')}
          >
            <FileText size={16} />
            Publications
          </NavItem>
        </DesktopNav>

        <UserTools>
          <a href='mailto:mubashirabbas3164@yahoo.com'>
            <Mail size={14} />
            <span>Contact</span>
          </a>
        </UserTools>
      </Header>

      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      <SideMenu isOpen={menuOpen}>
        <SideMenuHeader>
          <SideMenuTitle>Navigation</SideMenuTitle>
          <CloseButton onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </CloseButton>
        </SideMenuHeader>
        <SideMenuList>
          <SideMenuItem>
            <SideMenuButton
              active={page === 'home'}
              onClick={() => handleNavigation('home')}
            >
              <Home size={18} />
              Home
            </SideMenuButton>
          </SideMenuItem>
          <SideMenuItem>
            <SideMenuButton
              active={page === 'introduction'}
              onClick={() => handleNavigation('introduction')}
            >
              <User size={18} />
              Research Profile
            </SideMenuButton>
          </SideMenuItem>
          <SideMenuItem>
            <SideMenuButton
              active={page === 'tutorials'}
              onClick={() => handleNavigation('tutorials')}
            >
              <BookOpen size={18} />
              Tutorials
            </SideMenuButton>
          </SideMenuItem>
          <SideMenuItem>
            <SideMenuButton
              active={page === 'publications'}
              onClick={() => handleNavigation('publications')}
            >
              <FileText size={18} />
              Publications
            </SideMenuButton>
          </SideMenuItem>
        </SideMenuList>
      </SideMenu>

      <Container>
        <MainContent>
          {page === 'home' && renderHome()}
          {page === 'introduction' && renderIntroduction()}
          {page === 'tutorials' && renderTutorials()}
          {page === 'publications' && renderPublications()}
          {/* {page === 'blogs' && renderBlogs()} */}
        </MainContent>
      </Container>
    </GlobalWrapper>
  );
};

// export default App;

const renderIntroduction = () => (
  <>
    <PageHeader>
      <PageTitle>Academic Profile & Research</PageTitle>
      <Breadcrumbs>
        <button onClick={() => setPage('home')}>Main Page</button> →
        Introduction
      </Breadcrumbs>
    </PageHeader>

    <Section>
      <h2>Professional Background</h2>

      <p>
        Dr. Mubashir Abbas is a postdoctoral fellow at the prestigious Chinese
        Academy of Agricultural Sciences (CAAS) in Beijing, China. He works at
        the Biotechnology Research Institute, where he leads research projects
        combining cutting-edge genomics with computational biology to address
        fundamental questions in plant genetics and agricultural biotechnology.
      </p>

      <h3>Educational Background</h3>
      <p>
        Dr. Abbas earned his PhD in Molecular Biology and Biochemistry,
        developing expertise in both experimental and computational approaches
        to biological research. His doctoral training provided a strong
        foundation in molecular genetics, genomics, and bioinformatics, which he
        continues to build upon in his postdoctoral research.
      </p>

      <h2>Research Philosophy</h2>

      <p>
        Dr. Abbas's research philosophy centers on the integration of multiple
        disciplines to solve complex biological problems. By combining
        population genetics, functional genomics, and bioinformatics, he
        provides comprehensive insights into how genomes evolve and how genetic
        variation translates into phenotypic diversity.
      </p>

      <HighlightBox>
        <p>
          <strong>Research Mission:</strong> To understand the genetic
          architecture of cotton and leverage this knowledge to develop improved
          varieties that can meet global agricultural challenges including
          climate change, disease pressure, and increasing fiber quality
          demands.
        </p>
      </HighlightBox>

      <h2>Research Impact Metrics</h2>
      <p>
        According to{' '}
        <a
          href='https://scholar.google.com/citations?user=atvrp9wAAAAJ'
          target='_blank'
          rel='noopener'
        >
          Google Scholar
        </a>
        , Dr. Abbas's work has received over 203 citations, with an h-index of
        8. His research spans multiple domains including GWAS, big data
        analysis, computational biology, and plant stress physiology.
      </p>

      <h2>Core Research Areas</h2>

      <h3>Cotton Genomics & Pan-Genomics</h3>
      <p>
        Dr. Abbas contributes to cotton pan-genome research, which goes beyond
        single reference genomes to capture the full genetic diversity present
        across cotton varieties. The pan-genome approach, consisting of core
        genomes (sequences present in all individuals) and variable genomes
        (sequences found in some individuals), is crucial for:
      </p>
      <ul>
        <li>
          Uncovering genetic variations lost during domestication and
          improvement
        </li>
        <li>
          Providing genetic resources for enhancing yield, quality, resistance,
          and adaptability
        </li>
        <li>
          Understanding the genomic foundations of cotton domestication across
          multiple scales
        </li>
        <li>
          Identifying rare but valuable genetic variations for crop improvement
        </li>
      </ul>

      <h3>High-Throughput Phenotyping</h3>
      <p>
        Dr. Abbas has been instrumental in pioneering UAV-based phenotyping
        approaches in cotton research. His work demonstrates how remote sensing
        technology can revolutionize field-based trait measurement, enabling
        genome-wide association studies at unprecedented scales.
      </p>

      <h3>Stress Tolerance Research</h3>
      <p>
        A significant portion of Dr. Abbas's research portfolio focuses on
        understanding molecular mechanisms of stress tolerance in cotton,
        including:
      </p>
      <ul>
        <li>
          <strong>Cold Stress:</strong> Investigating physiological and
          molecular adaptations
        </li>
        <li>
          <strong>Heat Stress:</strong> Understanding thermotolerance mechanisms
        </li>
        <li>
          <strong>Salt Stress:</strong> Identifying genes for salinity tolerance
        </li>
        <li>
          <strong>Disease Resistance:</strong> Characterizing resistance
          pathways against fungal pathogens
        </li>
      </ul>

      <h2>Collaborative Research Network</h2>

      <p>
        Dr. Abbas actively collaborates with researchers from diverse
        institutions and disciplines. His collaborative work spans multiple
        countries and research groups, contributing to a global effort to
        improve cotton production and sustainability.
      </p>

      <h2>Future Research Vision</h2>

      <p>Looking forward, Dr. Abbas aims to:</p>
      <ul>
        <li>
          Integrate multi-omics data (genomics, transcriptomics, metabolomics)
          for systems-level understanding of cotton biology
        </li>
        <li>
          Apply CRISPR gene editing to validate functional predictions and
          create improved varieties
        </li>
        <li>
          Develop genomic selection models incorporating TE variation for
          breeding applications
        </li>
        <li>
          Build comprehensive databases linking genotype to phenotype in cotton
        </li>
        <li>
          Train the next generation of plant genomics researchers through
          mentorship and education
        </li>
      </ul>
    </Section>
  </>
);

const renderTutorials = () => (
  <>
    <PageHeader>
      <PageTitle>Bioinformatics Tutorials & Resources</PageTitle>
      <Breadcrumbs>
        <button onClick={() => setPage('home')}>Main Page</button> → Tutorials
      </Breadcrumbs>
    </PageHeader>

    <Section>
      <p>
        This comprehensive collection of bioinformatics tutorials provides
        step-by-step guidance on essential techniques in genomic data analysis.
        Each tutorial is designed for practical application, covering from basic
        file manipulation to advanced population genetics analysis.
      </p>

      <h2>Sequence Processing & Manipulation</h2>

      <TutorialItem>
        <div className='tutorial-title'>Perl Script to Split FASTA Files</div>
        <div className='tutorial-desc'>
          Learn how to efficiently manage large FASTA files by splitting them
          into smaller, manageable chunks. This tutorial covers Perl scripting
          fundamentals, file I/O operations, and batch processing techniques
          essential for handling genomic sequence data. Perfect for
          preprocessing data before downstream analysis or distributing
          sequences across multiple computational jobs.
        </div>
      </TutorialItem>

      <TutorialItem>
        <div className='tutorial-title'>
          Extract Matching Data from Two Files Using Python
        </div>
        <div className='tutorial-desc'>
          Master Python techniques for comparing and extracting matching records
          between datasets. This tutorial demonstrates efficient algorithms for
          data comparison, use of appropriate data structures (sets,
          dictionaries), and handling large files. Includes examples of
          extracting sequences based on ID lists, comparing variant calls
          between samples, and merging annotation data.
        </div>
      </TutorialItem>

      <TutorialItem>
        <div className='tutorial-title'>Calculate GC Content with Python</div>
        <div className='tutorial-desc'>
          A practical guide to calculating GC content in DNA sequences using
          Python. Learn about sequence composition analysis, sliding window
          approaches for regional GC content, and creating reusable functions.
          Includes visualization of GC content across chromosomes and
          interpretation of GC content patterns in genome analysis.
        </div>
      </TutorialItem>

      <h2>Next-Generation Sequencing Analysis</h2>

      <TutorialItem>
        <div className='tutorial-title'>
          Using BWA for Read Alignment to Reference Genome
        </div>
        <div className='tutorial-desc'>
          Comprehensive guide to using BWA (Burrows-Wheeler Aligner) for mapping
          NGS reads to reference genomes. Covers genome indexing, choosing
          appropriate alignment algorithms (BWA-backtrack vs BWA-MEM), parameter
          optimization, output format understanding, and quality control of
          alignment results. Includes troubleshooting common alignment issues
          and best practices for different sequencing technologies.
        </div>
      </TutorialItem>

      <TutorialItem>
        <div className='tutorial-title'>
          SRA-toolkit: Downloading and Processing NCBI Data
        </div>
        <div className='tutorial-desc'>
          Learn to use SRA-toolkit for accessing and processing sequencing data
          from NCBI's Sequence Read Archive. This tutorial covers installing
          SRA-toolkit, downloading specific datasets, converting SRA format to
          FASTQ, prefetch for batch downloads, quality assessment of downloaded
          data, and managing local SRA cache. Essential for researchers working
          with publicly available sequencing datasets.
        </div>
      </TutorialItem>

      <h2>Variant Analysis & Annotation</h2>

      <TutorialItem>
        <div className='tutorial-title'>
          Variant Annotation Pipeline Tutorial
        </div>
        <div className='tutorial-desc'>
          Step-by-step walkthrough of variant annotation workflows using
          industry-standard tools like SnpEff and VEP. Learn how to annotate
          genetic variants with functional information, predict effects on genes
          and proteins, add population frequency data, incorporate conservation
          scores, and interpret complex annotation results. Includes best
          practices for filtering clinically relevant variants and preparing
          data for publication.
        </div>
      </TutorialItem>

      <TutorialItem>
        <div className='tutorial-title'>Extracting Variants Using SnpSift</div>
        <div className='tutorial-desc'>
          Master SnpSift for advanced filtering and extraction of variants from
          VCF files. This tutorial covers creating complex filter expressions,
          extracting specific variant types (SNPs, indels, structural variants),
          filtering by quality metrics, extracting variants in specific genomic
          regions, and preparing variant subsets for downstream analysis.
          Includes real-world examples of quality control filtering strategies.
        </div>
      </TutorialItem>

      <h2>Population Genetics Analysis</h2>

      <TutorialItem>
        <div className='tutorial-title'>
          Comprehensive Population Genetic Analysis
        </div>
        <div className='tutorial-desc'>
          Complete tutorial on performing population genetic analyses including
          calculating diversity indices (π, θ), testing for Hardy-Weinberg
          equilibrium, analyzing population structure (PCA, ADMIXTURE),
          detecting signatures of selection (Tajima's D, Fst outliers),
          constructing neighbor-joining trees, and estimating demographic
          history. Covers multiple software tools (VCFtools, PLINK, ADMIXTURE)
          and proper interpretation of results. Includes real dataset examples
          from cotton population genomics.
        </div>
      </TutorialItem>

      <h2>Tutorial Features</h2>

      <p>Each tutorial provides:</p>
      <ul>
        <li>
          <strong>Clear Learning Objectives:</strong> What you will learn and be
          able to do after completing the tutorial
        </li>
        <li>
          <strong>Prerequisites:</strong> Required software installations,
          background knowledge, and sample data
        </li>
        <li>
          <strong>Detailed Instructions:</strong> Step-by-step commands with
          explanations of each parameter
        </li>
        <li>
          <strong>Working Examples:</strong> Real genomic datasets for hands-on
          practice
        </li>
        <li>
          <strong>Expected Outputs:</strong> What results should look like at
          each step
        </li>
        <li>
          <strong>Troubleshooting Guide:</strong> Common errors and their
          solutions
        </li>
        <li>
          <strong>Best Practices:</strong> Industry-standard approaches and
          quality control measures
        </li>
        <li>
          <strong>Further Resources:</strong> Links to documentation, papers,
          and advanced materials
        </li>
      </ul>
    </Section>
  </>
);

const renderPublications = () => (
  <>
    <PageHeader>
      <PageTitle>Scientific Publications</PageTitle>
      <Breadcrumbs>
        <button onClick={() => setPage('home')}>Main Page</button> →
        Publications
      </Breadcrumbs>
    </PageHeader>

    <Section>
      <p>
        Dr. Mubashir Abbas has authored and co-authored over 15 peer-reviewed
        publications in high-impact journals. His research spans cotton
        genomics, functional biology, stress responses, transposable elements,
        and bioinformatics applications in crop improvement.
      </p>

      <div
        style={{
          background: '#f0f7ff',
          padding: '15px',
          margin: '20px 0',
          borderLeft: '4px solid #3366cc',
        }}
      >
        <p>
          <strong>Publication Profiles:</strong>
        </p>
        <p>
          <a
            href='https://scholar.google.com/citations?user=atvrp9wAAAAJ'
            target='_blank'
            rel='noopener'
          >
            <ExternalLink
              size={14}
              style={{ display: 'inline', marginRight: '5px' }}
            />
            Google Scholar
          </a>{' '}
          |
          <a
            href='https://www.researchgate.net/profile/Mubashir-Abbas'
            target='_blank'
            rel='noopener'
            style={{ marginLeft: '10px' }}
          >
            <ExternalLink
              size={14}
              style={{ display: 'inline', marginRight: '5px' }}
            />
            ResearchGate
          </a>
        </p>
        <p style={{ marginTop: '10px' }}>
          <strong>Citations:</strong> 203+ | <strong>h-index:</strong> 8
        </p>
      </div>

      <h2>First Author Publications</h2>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://www.sciencedirect.com/science/article/abs/pii/S0926669024002176'
            target='_blank'
            rel='noopener'
          >
            Insights into genetic diversity and functional significance of the
            bHLH genes in cotton fiber development
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          <strong>Abbas M</strong>, Zang Y, Lu C, Khan MA, Rahman MAU, Umer MJ,
          Liang C, Meng Z, Wang P, Askari M, Wei Y, Zhang R
        </div>
        <div className='pub-journal'>
          <em>Industrial Crops and Products</em>, Volume 213 (2024)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.1016/j.indcrop.2024.118363'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.1016/j.indcrop.2024.118363 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This comprehensive study provides insights into the basic
          helix-loop-helix (bHLH) transcription factor family in cotton,
          revealing their critical roles in fiber development. Using genome-wide
          analysis and expression profiling across different developmental
          stages, the research identifies key regulatory genes and their
          functional significance in fiber quality traits.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://onlinelibrary.wiley.com/doi/10.1111/ppl.13816'
            target='_blank'
            rel='noopener'
          >
            Integrating advancements in root phenotyping and genome-wide
            association studies to open the root genetics gateway
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          <strong>Abbas M</strong>, Abid MA, Meng Z, Abbas M, Wang P, Lu C,
          Askari M, Akram U, Wei Y, Wang Y, Guo S, Liang C, Zhang R
        </div>
        <div className='pub-journal'>
          <em>Physiologia Plantarum</em>, Volume 174, Issue 5 (2022)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.1111/ppl.13816'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.1111/ppl.13816 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This comprehensive review integrates recent advances in root
          phenotyping technologies with genome-wide association study (GWAS)
          approaches to unlock the genetic basis of root architecture traits.
          The paper discusses high-throughput 2D and 3D phenotyping methods,
          genomic resources, statistical models for GWAS, and computational
          approaches for identifying genetic variants controlling root
          development.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          Agri-Nanotechnology and Tree Nanobionics: Augmentation in Crop Yield,
          Biosafety, and Biomass Accumulation
        </div>
        <div className='pub-authors'>
          <strong>Abbas M</strong>, Yan K, Li J, Zafar S, Hasnain Z, Aslam N,
          Iqbal N, Hussain SS, Usman M, Abbas M, Tahir M, Abbas S, Abbas SK,
          Qiulan H, Zhao X, El-Sappah AH
        </div>
        <div className='pub-journal'>
          <em>Frontiers in Bioengineering and Biotechnology</em>, Volume 10
          (2022)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.3389/fbioe.2022.853045'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.3389/fbioe.2022.853045 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This comprehensive review examines applications of nanotechnology in
          agriculture, focusing on crop yield enhancement, biosafety
          considerations, and biomass accumulation. The paper discusses
          nanoparticle-mediated delivery of nutrients and agrochemicals,
          biosensors for crop monitoring, and safety assessment of nanomaterials
          in agricultural systems.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://www.imrpress.com/journal/FBL/27/6/10.31083/j.fbl2706188'
            target='_blank'
            rel='noopener'
          >
            Genome-Wide Analysis and Expression Profiling of SlHsp70 Gene Family
            in Solanum lycopersicum Revealed Higher Expression of SlHsp70-11 in
            Roots under Cd2+ Stress
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          <strong>Abbas M</strong>, Li Y, Elbaiomy RG, Yan K, Ragauskas AJ,
          Yadav V, Soaud SA, Islam MM, Saleem N, Noor Z, Zafar S, Hussain SS,
          Abbas M, Abbas S, Li J, El-Sappah AH
        </div>
        <div className='pub-journal'>
          <em>Frontiers in Biosciences (Landmark Edition)</em>, Volume 27, Issue
          6 (2022)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.31083/j.fbl2706188'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.31083/j.fbl2706188 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This study provides comprehensive genome-wide characterization and
          expression profiling of the heat shock protein 70 (Hsp70) family in
          tomato. The research identified 29 SlHsp70 genes and analyzed their
          expression patterns under various stress conditions, with SlHsp70-11
          showing significantly higher expression in roots under cadmium stress.
        </div>
      </PublicationItem>

      <h2>Major Contributing Author Publications</h2>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-022-01475-4'
            target='_blank'
            rel='noopener'
          >
            Natural variation in Beauty Mark is associated with UV-based
            geographical adaptation in Gossypium species
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          Abid MA, Zhou Q, <strong>Abbas M</strong>, Meng Z, Wang Y, Wei Y, Guo
          S, Zhang R, Liang C
        </div>
        <div className='pub-journal'>
          <em>BMC Biology</em>, Volume 20, Article 272 (2022)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.1186/s12915-022-01475-4'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.1186/s12915-022-01475-4 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This study identifies natural genetic variation in Gossypium species
          associated with UV light adaptation across different geographical
          regions, revealing how environmental factors have shaped cotton genome
          evolution.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://onlinelibrary.wiley.com/doi/10.1111/tpj.16315'
            target='_blank'
            rel='noopener'
          >
            High-throughput UAV-based phenotyping reveals the genetic basis of
            plant height in upland cotton
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          Ye Y, Wang P, Zhang M, <strong>Abbas M</strong>, Zhang J, Liang C,
          Wang Y, Wei Y, Meng Z, Zhang R
        </div>
        <div className='pub-journal'>
          <em>The Plant Journal</em> (2024)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.1111/tpj.16315'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.1111/tpj.16315 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          Innovative use of UAV-based high-throughput phenotyping combined with
          genomic analysis to identify genetic factors controlling plant height
          in cotton, demonstrating the power of remote sensing for large-scale
          phenotyping.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://link.springer.com/article/10.1007/s10722-024-01944-0'
            target='_blank'
            rel='noopener'
          >
            Integrating physiological and molecular insights in cotton under
            cold stress conditions
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          Abro AA, Qasim M, <strong>Abbas M</strong>, Muhammad N, Ali I, Khalid
          S, Ahmed J, Waqas M, Ercisli S, Iqbal R, Liu F
        </div>
        <div className='pub-journal'>
          <em>Genetic Resources and Crop Evolution</em> (2024)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.1007/s10722-024-01944-0'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.1007/s10722-024-01944-0 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This integrative study combines physiological measurements with
          molecular analysis to understand cold stress responses in cotton. The
          research identifies key pathways and genes involved in cold tolerance.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://link.springer.com/article/10.1186/s42397-024-00177-1'
            target='_blank'
            rel='noopener'
          >
            Impacts of Climate Change on Cotton Production and Advancements in
            Genomic Approaches for Stress Resilience Enhancement
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          Khan MA, Ahmad S, <strong>Abbas M</strong>, Khan A, Wei Y, Zhang R
        </div>
        <div className='pub-journal'>
          <em>Journal of Cotton Research</em> (2024)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.1186/s42397-024-00177-1'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.1186/s42397-024-00177-1 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          This comprehensive review examines how climate change affects cotton
          production and discusses advanced genomic approaches for developing
          climate-resilient varieties through genomic selection, gene editing,
          and multi-omics integration.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://www.frontiersin.org/articles/10.3389/fpls.2022.890422/full'
            target='_blank'
            rel='noopener'
          >
            Genome-wide identification and analyses of cotton high-affinity
            nitrate transporter 2 (NRT2) family genes and their responses to
            stress
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          Wang P, Pu Y, <strong>Abbas M</strong>, Khan MA, Xu J, Yang Y, Zhou T,
          Zheng K, Chen Q, Sun G
        </div>
        <div className='pub-journal'>
          <em>Frontiers in Plant Science</em> (2022)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.3389/fpls.2022.890422'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.3389/fpls.2022.890422 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          Comprehensive genome-wide analysis of high-affinity nitrate
          transporter genes in cotton, examining their evolutionary
          relationships, expression patterns under nitrogen stress, and
          responses to various environmental stresses.
        </div>
      </PublicationItem>

      <PublicationItem>
        <div className='pub-title'>
          <a
            href='https://www.mdpi.com/2073-4425/11/7/828'
            target='_blank'
            rel='noopener'
          >
            Genome-Wide Characterization and Expression Analysis of NHX Gene
            Family under Salinity Stress in Gossypium barbadense and Comparison
            with G. hirsutum
            <ExternalLink size={14} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className='pub-authors'>
          Akram U, Song Y, Liang C, Abid MA, Askari M, Myat AA,{' '}
          <strong>Abbas M</strong>, Malik W, Ali Z, Guo S, Zhang R, Meng Z
        </div>
        <div className='pub-journal'>
          <em>Genes</em>, Volume 11, Issue 7 (2020)
        </div>
        <div className='pub-doi'>
          <a
            href='https://doi.org/10.3390/genes11070828'
            target='_blank'
            rel='noopener'
          >
            DOI: 10.3390/genes11070828 <ExternalLink size={12} />
          </a>
        </div>
        <div className='pub-abstract'>
          Comprehensive identification and characterization of sodium/hydrogen
          exchanger (NHX) genes in cultivated cotton species, revealing their
          roles in salt stress tolerance and ion homeostasis.
        </div>
      </PublicationItem>

      <h2>Research Impact</h2>

      <p>
        Dr. Abbas's publications reflect several interconnected research themes
        that have significantly advanced cotton genomics and plant biology:
      </p>

      <ul>
        <li>
          <strong>Genome-Wide Analyses:</strong> Comprehensive identification
          and characterization of gene families
        </li>
        <li>
          <strong>Stress Biology:</strong> Understanding molecular mechanisms of
          plant responses to biotic and abiotic stresses
        </li>
        <li>
          <strong>Cotton Improvement:</strong> Translating genomic discoveries
          into practical breeding applications
        </li>
        <li>
          <strong>Evolutionary Genomics:</strong> Revealing how domestication
          and selection have shaped crop genomes
        </li>
        <li>
          <strong>Methodological Innovation:</strong> Developing cutting-edge
          analytical approaches
        </li>
      </ul>

      <h2>Citation Metrics & Impact</h2>

      <p>
        According to Google Scholar, Dr. Abbas's publications have received over
        203 citations, with an h-index of 8. His work influences ongoing studies
        in plant genetics, genomics, and agricultural biotechnology worldwide,
        contributing to UN Sustainable Development Goals related to food
        security and climate action.
      </p>
    </Section>
  </>
);

export default App;
