import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";

import BrandingForm from "../components/branding/BrandingForm";
import LoginPreview from "../components/login/LoginPreview";
import ThemeGrid from "../components/branding/ThemeGrid";

export default function AdminBranding() {
  return (
    <div className="space-y-10">

      <PageTitle
        title="Brand Dashboard"
        subtitle="Customize company branding, logo and login experience."
      />

      {/* Top Grid */}

      <div className="grid lg:grid-cols-2 gap-8 items-start">

        <Card>

          <BrandingForm />

        </Card>

        <Card className="sticky top-28">

          <LoginPreview />

        </Card>

      </div>

      {/* Templates */}

      <Card>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Login Templates
            </h2>

            <p className="text-slate-500">
              Select the appearance of your login page.
            </p>

          </div>

        </div>

        <ThemeGrid />

      </Card>

    </div>
  );
}