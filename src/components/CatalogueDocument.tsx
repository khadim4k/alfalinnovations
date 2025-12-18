import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Domain } from '@/pages/domaines';

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
    paddingBottom: 60, // Espace pour le footer
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#e53e3e',
    paddingBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c',
    textTransform: 'uppercase',
  },
  brandAccent: {
    color: '#e53e3e',
  },
  dateText: {
    fontSize: 10,
    color: '#718096',
    marginTop: 8,
  },
  titleContainer: {
    marginBottom: 20,
  },
  domainTitle: {
    fontSize: 24,
    color: '#2d3748',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  domainSubtitle: {
    fontSize: 12,
    color: '#e53e3e',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 20,
    height: 200,
    width: '100%',
    backgroundColor: '#f7fafc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#2d3748',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e0',
    paddingBottom: 5,
    marginBottom: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 11,
    lineHeight: 1.5,
    color: '#4a5568',
    textAlign: 'justify',
  },
  serviceItem: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
  },
  bulletPoint: {
    width: 3,
    height: 3,
    backgroundColor: '#e53e3e',
    borderRadius: '50%',
    marginRight: 8,
  },
  serviceText: {
    fontSize: 11,
    color: '#4a5568',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: '#cbd5e0',
    paddingTop: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#a0aec0',
    marginBottom: 2,
  },
  // Styles Galerie
  galleryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e53e3e',
    paddingBottom: 5,
    textTransform: 'uppercase',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#f7fafc',
    padding: 8,
    borderRadius: 4,
  },
  galleryImage: {
    width: '100%',
    height: 140,
    objectFit: 'cover',
    borderRadius: 2,
    marginBottom: 6,
  },
  galleryItemTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 2,
  },
  galleryItemDesc: {
    fontSize: 9,
    color: '#718096',
    lineHeight: 1.3,
  },
});

interface CatalogueDocumentProps {
  domain: Domain;
}

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.logoText}>
        Alfa<Text style={styles.brandAccent}>l</Text>innovation
      </Text>
      <Text style={{ fontSize: 10, color: '#4a5568' }}>Excellence & Innovation</Text>
    </View>
    <View>
      <Text style={styles.dateText}>Catalogue {new Date().getFullYear()}</Text>
    </View>
  </View>
);

const Footer = ({ pageIndex, totalPages }: { pageIndex?: number, totalPages?: number }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Al-Fal Innovation - Thiès, Sénégal</Text>
    <Text style={styles.footerText}>Tel: +221 76 441 05 98 | Email: alfalinnovationsn@outlook.com</Text>
    {pageIndex && totalPages && (
      <Text style={[styles.footerText, { marginTop: 4 }]}>Page {pageIndex} / {totalPages}</Text>
    )}
  </View>
);

const CatalogueDocument: React.FC<CatalogueDocumentProps> = ({ domain }) => {
  // Préparation des pages
  const pages: any[] = [];
  
  // Page 1: Couverture et Présentation
  pages.push({ type: 'cover' });

  // Pages Galerie
  if (domain.galleries) {
    domain.galleries.forEach(gallery => {
      const items = gallery.items || [];
      // 4 items par page maximum pour une bonne lisibilité
      for (let i = 0; i < items.length; i += 4) {
        pages.push({
          type: 'gallery',
          title: gallery.title,
          items: items.slice(i, i + 4)
        });
      }
    });
  }

  // Limite à 7 pages max pour éviter les fichiers trop lourds
  const pagesToRender = pages.slice(0, 7);

  return (
    <Document>
      {pagesToRender.map((pageData, index) => (
        <Page key={index} size="A4" style={styles.page}>
          <Header />
          
          {pageData.type === 'cover' && (
            <>
              <View style={styles.titleContainer}>
                <Text style={styles.domainTitle}>{domain.title}</Text>
                <Text style={styles.domainSubtitle}>{domain.subtitle}</Text>
              </View>

              {domain.image && (
                <View style={styles.imageContainer}>
                  <Image style={styles.image} src={domain.image} />
                </View>
              )}

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Présentation</Text>
                <Text style={styles.description}>{domain.description}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nos Prestations</Text>
                <View style={{ marginTop: 5 }}>
                  {domain.services.map((service, idx) => (
                    <View key={idx} style={styles.serviceItem}>
                      <View style={styles.bulletPoint} />
                      <Text style={styles.serviceText}>{service}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </>
          )}

          {pageData.type === 'gallery' && (
            <>
              <Text style={styles.galleryTitle}>{pageData.title}</Text>
              <View style={styles.galleryGrid}>
                {pageData.items.map((item: any, idx: number) => (
                  <View key={idx} style={styles.galleryItem}>
                    {item.image && <Image style={styles.galleryImage} src={item.image} />}
                    <Text style={styles.galleryItemTitle}>{item.title}</Text>
                    <Text style={styles.galleryItemDesc}>{item.description}</Text>
                  </View>
                ))}
              </View>
            </>
          )}

          <Footer pageIndex={index + 1} totalPages={pagesToRender.length} />
        </Page>
      ))}
    </Document>
  );
};

export default CatalogueDocument;
