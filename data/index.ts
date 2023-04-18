interface DataProps {
  live?: boolean;
  id: number;
  title: string;
  subtitle: string;
  header?: string;
  description?: string;
  graphic?: string;
}

const sections = [
  {
    id: 1,
    title: "Receive",
    subtitle: "01",
    header: "Eliminate manual data entry",
    description:
      "Save time and avoid manual input errors by directing all invoices to your dedicated Rho bill inbox. Invoice details are auto-populated and mapped to your accounting codes so you can focus your time elsewhere.",
    graphic: "recieve.png",
  },
  {
    id: 2,
    title: "Approve",
    subtitle: "02",
    header: "Automate your approvals",
    description:
      "Empower finance to collaborate with teams for faster and safer bill pay. Rho’s smart approval controls automatically assign approvers for every invoice, giving you a clear audit trail, increased oversight, and time back in your day.",
    graphic: "approve.png",
  },
  {
    id: 3,
    title: "Pay",
    subtitle: "03",
    header: "Pay bills with ease",
    description:
      "Pay all your invoices within Rho for free - pay anyone, anywhere, via domestic ACH wires, International SWIFT wires, Foreign FX, and checks. Eliminate expenses including SaaS and transaction fees and say hello to easy, automated bill pay.",
    graphic: "pay.png",
  },
  {
    id: 4,
    title: "Sync",
    subtitle: "04",
    header: "Reconcile in a flash",
    description:
      "Automate your books and reduce A/P workload with Rho’s advanced accounting integration. Perfectly in sync with your books, all invoices and payments are created and reconciled automatically so you can close each month faster.  ",
    graphic: "sync.png",
  },
  {
    id: 5,
    title: "Report",
    subtitle: "05",
    header: "Streamline your reporting",
    description:
      "Run live A/P and stay on top of your bills with complete visibility AP reporting. View all liabilities, track invoices, understand payee impacts to your bottom line via Vendor Reports and quickly access payee details via streamlined payee profiles.",
    graphic: "report.png",
  },
  {
    live: false,
    id: 6,
    title: "Example",
    subtitle: "06",
    header: "Add another section easily",
    description:
      "Not a real section, but for the purpses of this test it helps to visualize how easy it is to add another section to the page. Mark the live property as false to hide it from the page.",
  },
] as DataProps[];

export default sections;
export type { DataProps };
