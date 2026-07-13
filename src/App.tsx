import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";

const Services = lazy(() => import("@/pages/Services").then((m) => ({ default: m.Services })));
const ShapeTheManuscript = lazy(() =>
  import("@/pages/services/ShapeTheManuscript").then((m) => ({ default: m.ShapeTheManuscript })),
);
const BuildTheEdition = lazy(() =>
  import("@/pages/services/BuildTheEdition").then((m) => ({ default: m.BuildTheEdition })),
);
const EnterTheMarket = lazy(() =>
  import("@/pages/services/EnterTheMarket").then((m) => ({ default: m.EnterTheMarket })),
);
const Process = lazy(() => import("@/pages/Process").then((m) => ({ default: m.Process })));
const Work = lazy(() => import("@/pages/Work").then((m) => ({ default: m.Work })));
const CaseStudy = lazy(() => import("@/pages/CaseStudy").then((m) => ({ default: m.CaseStudy })));
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const Founder = lazy(() => import("@/pages/Founder").then((m) => ({ default: m.Founder })));
const Pricing = lazy(() => import("@/pages/Pricing").then((m) => ({ default: m.Pricing })));
const Resources = lazy(() => import("@/pages/Resources").then((m) => ({ default: m.Resources })));
const Faq = lazy(() => import("@/pages/Faq").then((m) => ({ default: m.Faq })));
const Contact = lazy(() => import("@/pages/Contact").then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import("@/pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("@/pages/Terms").then((m) => ({ default: m.Terms })));
const Accessibility = lazy(() =>
  import("@/pages/Accessibility").then((m) => ({ default: m.Accessibility })),
);
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/shape-the-manuscript" element={<ShapeTheManuscript />} />
          <Route path="/services/build-the-edition" element={<BuildTheEdition />} />
          <Route path="/services/enter-the-market" element={<EnterTheMarket />} />
          <Route path="/process" element={<Process />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
