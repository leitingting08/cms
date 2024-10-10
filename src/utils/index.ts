export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}
export const formatDollarAmount = (num: number | bigint, digits: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })
  return formatter.format(num)
}

export const useQueryParams = (search?: string) => {
  const params: any = {}
  const q = search || window.location.search
  if (q) {
    q.split('?')?.[1]
      ?.split('&')
      .forEach((item: string) => {
        const arr = item.split('=')
        params[arr[0]] = arr[1]
      })
  }
  return params
}

export const getSign = async (provider: any, address: any, timestamp: any) => {
  try {
    const sign = await provider.request({
      method: 'personal_sign',
      params: [`address=${address}&timestamp=${timestamp}`, address]
    })
    return sign
  } catch (error) {
    console.error(error)
  }
}

// 中间省略适用于address
export const getEllipsis = (account: string, preNum: number, nextNum: number) => {
  return account ? `${account.substring(0, preNum)}...${account.substring(account.length - nextNum)}` : null
}

export const getFloatNum = (num: string | number | undefined) => {
  return parseFloat((num || 0)?.toString())
}

// 处理小数 只舍不入
export const truncate = (n: number | string, precision: number) => {
  const f = Math.pow(10, Math.max(precision | 0, 0)) * 10
  return Math.trunc(Number(n) * f) / f
}

export const truncateHash = (address: string, startLength = 4, endLength = 4) => {
  return `${address.substring(0, startLength)}...${address.substring(address.length - endLength)}`
}
