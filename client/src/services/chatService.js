export const INITIAL_CHAT_MESSAGE = {
  id: 'msg-init',
  sender: 'assistant',
  text: 'Hello! I am your Natarajan AI Travel Assistant. How can I assist you with your car rental, hill station tour, or journey estimate today?',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestions: [
    'Recommend a car for 6 people',
    'What are your Innova Crysta rates?',
    'Popular Ooty tour package',
    'What is your cancellation policy?',
  ],
};

export const chatService = {
  /**
   * Generates intelligent simulated travel assistant responses
   * (Does not call external AI APIs; serves as clean mock provider)
   */
  async sendMessage(userText) {
    // Simulate brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 650));

    const lower = userText.toLowerCase();
    let reply = '';
    let suggestions = [];

    if (lower.includes('6') || lower.includes('7') || lower.includes('innova') || lower.includes('family')) {
      reply =
        'For 6 to 7 passengers traveling together, our **Toyota Innova Crysta** (₹3,200/day) is the ideal choice. It features captain seats, dedicated dual AC, and unmatched stability on hill roads like Ooty & Kodaikanal.';
      suggestions = ['Check Innova Availability', 'What about 12+ passengers?', 'Call our desk'];
    } else if (lower.includes('10') || lower.includes('12') || lower.includes('tempo') || lower.includes('group') || lower.includes('bus')) {
      reply =
        'For larger groups (10-14 passengers), we recommend our luxury **Force Urbania 12-Seater** (₹5,500/day). It features executive reclining bucket seats, individual AC vents, and massive luggage space.';
      suggestions = ['View Force Urbania specs', 'Book for a group tour'];
    } else if (lower.includes('rate') || lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
      reply =
        'Our rates start at ₹1,800/day for Sedans (Swift Dzire), ₹3,200/day for Premium SUVs (Innova Crysta), and ₹5,500/day for Tempo Travellers. All outstation packages include experienced chauffeurs with transparent pricing.';
      suggestions = ['Explore Full Fleet', 'Check Package Itineraries'];
    } else if (lower.includes('ooty') || lower.includes('kodai') || lower.includes('package') || lower.includes('tour') || lower.includes('munnar')) {
      reply =
        'We offer comprehensive 3-Day & 4-Day tour packages to Ooty, Kodaikanal, Munnar, and South Indian Temple trails. Packages include private sanitized vehicles, experienced mountain chauffeurs, fuel, and toll passes.';
      suggestions = ['View Tour Packages', 'Customize Itinerary'];
    } else if (lower.includes('cancel') || lower.includes('refund') || lower.includes('policy')) {
      reply =
        'We offer **100% Free Cancellation** up to 24 hours prior to your scheduled pickup time. Any advance deposit is refunded immediately with zero deduction.';
      suggestions = ['What documents are required?', 'Book with confidence'];
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('human') || lower.includes('call') || lower.includes('talk')) {
      reply =
        'You can speak directly with our 24/7 reservation desk at **+91 98765 43210** or WhatsApp us anytime for instant quotes and customized bookings.';
      suggestions = ['Call Now: +91 98765 43210', 'Send WhatsApp Message'];
    } else {
      reply =
        'Thank you for reaching out! I can help you choose the right vehicle (Sedan, SUV, Luxury, Tempo Traveller), explain our tour itineraries, or guide you through estimating your trip cost. How can I assist?';
      suggestions = [
        'Recommend a car for 6 people',
        'What are your rates?',
        'Ooty & Kodai packages',
        'Contact Agency directly',
      ];
    }

    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions,
    };
  },
};
