import { Document, Page, View, Image, StyleSheet, Font, Text } from '@react-pdf/renderer';
import THSarabunBold from '../../assets/fonts/THSarabun Bold.ttf';
import THSarabun from '../../assets/fonts/THSarabun.ttf';
import sewLogo from '../../assets/images/sewLogo.png';

Font.register({
  family: 'THSarabun',
  format: 'truetype',
  src: THSarabun,
});
Font.register({
  family: 'THSarabunBold',
  format: 'truetype',
  src: THSarabunBold,
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 24,
  },
  logo: {
    height: 32,
    width: 32,
  },
  textBold: {
    fontFamily: 'THSarabunBold',
  },
  text: {
    fontFamily: 'THSarabun',
  },
});

const TestPdf = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View>
          <View>
            <Image source={sewLogo} style={styles.logo} debug />
            <Text style={styles.text}>ฟ้อนภาษาไทย</Text>
            <Text style={styles.textBold}>ฟ้อนภาษาไทย ตัวหนา</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TestPdf;
