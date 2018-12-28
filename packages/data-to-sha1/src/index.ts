import hashData, { Data, Encoding } from 'data-to-hash'

export default (data: Data, encoding: Encoding = 'hex') => hashData('sha1', data, encoding)
