import React, {useState, useEffect} from 'react'
import { generateInvoice } from '../serviceRequests/lightningNode'

const GenerateInvoice = () => {
  const [invoiceAmount, setInvoiceAmount] = useState(0)
  const [invoiceMemo, setInvoiceMemo] = useState("")
  const [invoiceData, setInvoiceData] = useState({})

  useEffect(() => {

  }, [])

  const handleGenerateInvoice = async (amount, memo) => {
    const invoice = await generateInvoice(amount, memo);
  }

  return (
    <div>
      <input type="number" onChange={setInvoiceAmount} value={invoiceAmount} />
      <input type="text" onChange={setInvoiceMemo} value={invoiceMemo} />
    </div>
  )

}

export default GenerateInvoice