import  { Document, Page } from 'react-pdf';

//@ts-ignore
const PDFViewer = ({ pdf }) => {
    return (
        <Document file={ pdf } >
            <Page pageNumber={1} />
        </Document>
    )
}

export default PDFViewer