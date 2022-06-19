export const getChannelData = async () => {
  return {
    'Alice': {
      'nodePubKey': 'fakepubkey',
      'channels': [
        {data: 'fake channel data'}
      ]
    }
  }
}

export const getNodeData = async () => {
  return {
    'Alice': {
      'nodePubKey': 'fakepubkey',
      'channels': [
        {data: 'fake channel data'}
      ]
    }
  }
}

export const generateInvoice = async (amount, memo) => {
  return {
    amount: amount,
    memo: memo,
  }
}