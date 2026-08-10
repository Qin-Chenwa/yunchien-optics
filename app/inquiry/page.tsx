import { Suspense } from "react";
import InquiryForm from "./InquiryForm";

export default function InquiryPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-2xl px-4 py-12">…</div>}>
      <InquiryForm />
    </Suspense>
  );
}
