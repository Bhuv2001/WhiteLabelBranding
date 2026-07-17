import { useBranding } from "../../hooks/useBranding";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionTitle";
import LogoUploader from "./LogoUploader";
import ThemeModeToggle from "./ThemeModeToggle";
import SaveButton from "./SaveButton";

export default function BrandingForm() {
  const { branding, updateBranding } = useBranding();

  function handleChange(e) {
    updateBranding(e.target.name, e.target.value);
  }

  return (
    <div className="space-y-8">

      <SectionTitle
        title="Brand Information"
        subtitle="Customize how your authentication portal appears."
      />

      <div className="space-y-6">

        <Input
          label="Company Name"
          name="company_name"
          value={branding.company_name}
          onChange={handleChange}
          placeholder="Shivacha Technologies"
        />

        <Input
          label="Application Name"
          name="app_name"
          value={branding.app_name}
          onChange={handleChange}
          placeholder="Employee Portal"
        />

      </div>

      <LogoUploader />

      <ThemeModeToggle />

      <div className="pt-2">
        <SaveButton />
      </div>

    </div>
  );
}