'use client';

import PageBanner from '../components/page-banner';

export default function ErrorPage({ reset }) {
  return <><PageBanner title="Something went wrong" description="We could not load this page right now." /><section className="page-width not-found"><button className="button button-primary" onClick={() => reset()}>Try again <span aria-hidden="true">↻</span></button></section></>;
}
