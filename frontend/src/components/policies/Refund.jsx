import PolicyRenderer from './PolicyRenderer'
import { LEGAL_REFUND } from '../../data/legalRefund'

export default function Refund() {
  return <PolicyRenderer policy={LEGAL_REFUND} />
}
