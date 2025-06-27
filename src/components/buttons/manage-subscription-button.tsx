"use client";

import { createCustomerPortalSession } from "@/actions/billing-actions";
import { useState } from "react";
import { toast } from "sonner";
import LoadingButton from "./loading-button";

export default function ManageSubscriptionButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);
      const redirectUrl = await createCustomerPortalSession();
      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoadingButton onClick={handleClick} loading={loading}>
      Manage subscription
    </LoadingButton>
  );
}
