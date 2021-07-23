import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import TestPdf from './components/Pdf/TestPdf';
import { Box, Button, Dialog } from '@material-ui/core';
import DocumentTextIcon from './icons/DocumentText';
import ArrowLeftIcon from './icons/ArrowLeft';
const App = () => {
  const [isOpenPDF, setIsOpenPDF] = useState(false);

  return (
    <>
      <Button
        color='primary'
        startIcon={<DocumentTextIcon fontSize='small' />}
        onClick={() => setIsOpenPDF(true)}
        variant='contained'
      >
        Open PDF
      </Button>
      <Dialog fullScreen open={isOpenPDF}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'background.default',
              p: 2,
            }}
          >
            <Button
              color='primary'
              startIcon={<ArrowLeftIcon fontSize='small' />}
              onClick={() => setIsOpenPDF(false)}
              variant='contained'
            >
              ย้อนกลับ
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <PDFViewer height='100%' style={{ border: 'none' }} width='100%'>
              <TestPdf />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default App;
