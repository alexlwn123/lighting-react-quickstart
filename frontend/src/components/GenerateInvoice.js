import React, {useState, useEffect} from 'react'
import { generateInvoice } from '../serviceRequests/lightningNode'

const GenerateInvoice = () => {
  const [invoiceAmount, setInvoiceAmount] = useState(0)
  const [invoiceMemo, setInvoiceMemo] = useState("")
  const [invoiceData, setInvoiceData] = useState("")

  useEffect(() => {

  }, [])

  const handleGenerateInvoice = async () => {
    const invoice = await generateInvoice(invoiceAmount, invoiceMemo);
    console.log(invoice)
    setInvoiceData(JSON.stringify(invoice))
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div style={{display: 'flex', padding: '10px'}}>
        Invoice Amount (sats): {'   '}  
        <input type="number" onChange={e => setInvoiceAmount(e.target.value)} value={invoiceAmount} />
        <div style={{width: '10px'}} />
        Invoice Memo:  {'   '}
        <input type="text" onChange={e => setInvoiceMemo(e.target.value)} value={invoiceMemo} />
      </div>
      <input value="Generate Invoice!" type="button" onClick={() => handleGenerateInvoice()} style={{width: '150px'}} />
      <p>
        {invoiceData ? invoiceData : ""}
      </p>
    </div>
  )

}

export default GenerateInvoice