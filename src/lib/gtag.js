export const GA_TRACKING_ID = "G-13P4TBDEJH";

export const event = ({ action, category, label }) => {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    window.gtag("event", action, {
        event_category: category,
        event_label: label,
    });
};
