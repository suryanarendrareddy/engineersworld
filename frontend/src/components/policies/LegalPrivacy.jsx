import PolicyRenderer from './PolicyRenderer'
import { PRIVACY_POLICY } from '../../data/legalPrivacy'

export default function LegalPrivacy() {
  return <PolicyRenderer policy={PRIVACY_POLICY} />
}
