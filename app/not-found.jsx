import Link from 'next/link';
import PageBanner from '../components/page-banner';

export default function NotFound() {
  return <><PageBanner title="Page not found" description="The address may have changed. Return home or browse our product listings." /><section className="page-width not-found"><Link className="button button-primary" href="/">Return home <span aria-hidden="true">↗</span></Link></section></>;
}
