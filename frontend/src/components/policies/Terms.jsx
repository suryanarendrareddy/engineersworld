import PolicyRenderer from './PolicyRenderer'
import { LEGAL_TERMS } from '../../data/legalTerms'

export default function Terms() {
  return <PolicyRenderer policy={LEGAL_TERMS} />
}
