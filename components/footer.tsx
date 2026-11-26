export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>Delivery Service</li>
              <li>Customer Service</li>
              <li>Payment Processing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>Return & Refund</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Join us and revolutionize the future of non-contact grocery shopping experience.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ibeplus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}