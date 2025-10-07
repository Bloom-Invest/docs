# Bloom Marketing & Documentation Guide

> **Your AI-Powered Investment Research Platform**
> Make smarter investment decisions with AI insights, curated market intelligence, and comprehensive research tools.

---

## Executive Summary

**Bloom** is a comprehensive investment research platform that empowers investors with AI-powered insights, real-time market intelligence, and institutional-grade research tools. Built for individual investors who want more than basic portfolio tracking, Bloom combines advanced AI (GPT, Claude, Llama) with 20+ premium data sources to deliver actionable investment research, daily stock picks with clear reasoning, and curated market updates—all wrapped in a beautiful, intuitive interface.

**Core Value Proposition:** Turn hours of investment research into minutes with an AI assistant that understands markets, analyzes fundamentals, reads earnings transcripts, and provides personalized recommendations backed by data.

**Availability:** Web app + native iOS and Android apps

---

## Product Overview

### What is Bloom?

Bloom is an all-in-one investment research platform designed to help you make smarter investment decisions without overwhelming you with information. Whether you're researching individual stocks, building portfolios, or staying up-to-date on market movements, Bloom provides the insights you need in an accessible, actionable format.

### Who is Bloom For?

- **Individual investors** who want institutional-quality research without paying thousands per year
- **Active traders** who need real-time insights on earnings, technicals, and market sentiment
- **Portfolio managers** seeking AI-powered portfolio analysis and rebalancing recommendations
- **Long-term investors** who want to understand fundamental shifts in their holdings
- **Busy professionals** who need curated market digests instead of information overload

---

## Four Core Features

### 1. 🤖 AI Investment Assistant: Deep Research at Your Fingertips

**What it does:** Chat with an AI research analyst that has access to 28 specialized financial tools, real-time market data, and earnings transcripts.

**User Benefits:**
- Ask natural language questions: "Should I buy Apple now?" or "What are the risks in my portfolio?"
- Get comprehensive analysis combining fundamentals, technicals, sentiment, and earnings insights
- Receive sourced answers with data citations and reasoning
- Stream responses in real-time for instant feedback

**Powered by:**
- OpenAI GPT for analysis and reasoning
- Anthropic Claude for document analysis
- Groq/Cerebras for high-speed inference
- 13 specialized MCP tools for investment research

**Example Queries:**
- "Analyze NVDA's earnings growth vs competitors"
- "What are the top momentum stocks in tech right now?"
- "Review my portfolio of AAPL, GOOGL, MSFT and suggest improvements"
- "Find stocks with P/E under 15 and revenue growth over 20%"

---

### 2. 💡 Daily Investment Ideas: Stock Picks with Clear Reasoning

**What it does:** Curated collections of investment ideas updated daily with AI-generated analysis explaining *why* each stock is worth considering.

**User Benefits:**
- Discover new opportunities without spending hours screening
- Understand the investment thesis behind each recommendation
- Filter by strategy: growth, value, momentum, dividends, sector rotation
- Save ideas to your watchlist or portfolios for tracking

**Collections Include:**
- **Top Momentum Stocks** - High relative strength with strong price action
- **Undervalued Gems** - Low P/E with strong fundamentals
- **Dividend Aristocrats** - Consistent dividend growers
- **Sector Leaders** - Best-in-class companies by industry
- **AI & Innovation Plays** - Cutting-edge technology investments
- **Defensive Holdings** - Low-volatility, stable businesses

**Data Sources:**
- Financial fundamentals from AlphaVantage and IEX Cloud
- Technical indicators (RSI, moving averages, Bollinger bands)
- Earnings estimates and surprises
- AI-powered ratings and risk assessments

---

### 3. 📰 Curated Market Digests: Stay Informed Without Overload

**What it does:** Personalized market updates focused on YOUR tracked stocks, eliminating noise and highlighting what matters.

**User Benefits:**
- Get key events for your watchlist stocks (earnings, FDA approvals, analyst upgrades)
- See "Why It's Moving" analysis for significant price changes
- Track sector trends and market sentiment
- Receive actionable insights, not just news headlines

**Key Events Tracked:**
- Earnings announcements and surprises
- Analyst rating changes (upgrades/downgrades)
- Insider buying and selling activity
- FDA approvals and regulatory decisions
- Corporate actions (mergers, splits, buybacks)
- Significant price movements with AI analysis

**Notification Support:**
- Push notifications for portfolio key events (iOS/Android)
- Customizable alert thresholds
- Real-time updates during market hours

---

### 4. 📊 Simple Watchlist: Track Your Portfolio with Beautiful UI

**What it does:** Elegant, intuitive watchlist for tracking stocks, ETFs, and mutual funds with comprehensive data at a glance.

**User Benefits:**
- See real-time prices, percent changes, and market caps
- Access comprehensive stock pages with charts, financials, and analysis
- Organize holdings by custom lists (Growth Stocks, Retirement, Speculative)
- Sync seamlessly across web and mobile

**Data Available Per Stock:**
- **Price Charts:** 1D, 1W, 1M, 3M, 1Y, YTD, 5Y with interactive charting
- **Financials:** Revenue, earnings, cash flow, balance sheet metrics
- **Valuation:** P/E, P/S, PEG, price-to-book, dividend yield
- **Technicals:** RSI, moving averages (50/200 SMA), Bollinger bands
- **Earnings:** Historical results, estimates, transcript insights
- **Risk Analysis:** Common risk factors extracted from SEC filings
- **Peers:** Related stocks for comparison
- **Bottom Line Ratings:** AI-powered investment ratings

**Mobile-Optimized:**
- Native iOS and Android apps built with Capacitor
- Touch-optimized charts and navigation
- Offline support for cached data
- Dark mode support

---

## Technical Capabilities

### AI & Machine Learning Stack

| AI Service | Model | Use Case |
|------------|-------|----------|
| **OpenAI** | GPT-4o-mini | Company descriptions, peer identification, content generation |
| **OpenAI** | text-embedding-3-large | Semantic search and document embeddings |
| **Anthropic** | Claude Sonnet | Earnings transcript analysis, PDF processing |
| **Groq** | Llama 3.3 70B | High-speed chat inference (primary) |
| **Cerebras** | Llama 3.3 70B | High-speed chat inference (fallback) |
| **Perplexity** | Sonar-Pro | Real-time web search with citations |
| **OpenRouter** | GPT-OSS-120B | URL content fetching and summarization |

### Data Sources & Integrations (20+)

#### Financial Data Providers
| Provider | Purpose | Key Features |
|----------|---------|--------------|
| **AlphaVantage** | Real-time quotes, fundamentals, earnings transcripts | 150 req/min, Redis caching, technical indicators |
| **IEX Cloud** | Backup financial data, insider transactions | Sandbox/production auto-detect, OTC support |
| **EOD Historical Data** | ETF/mutual fund holdings, expense ratios | Fund-specific data, international coverage |
| **Benzinga** | Financial news, "Why Is It Moving" analysis | Sentiment analysis, 50-ticker batch limit |

#### AI/ML Services
| Service | Purpose | Key Features |
|---------|---------|--------------|
| **OpenAI** | Text generation, embeddings | Instructor library for structured outputs |
| **Anthropic Claude** | Document analysis | Long context (200k tokens), structured JSON |
| **Groq** | Fast inference | Ultra-low latency chat responses |
| **Cerebras** | Fallback inference | High-speed token generation |
| **Perplexity** | Web search | Financial query optimization, recency filters |

#### Search & Discovery
| Service | Purpose | Key Features |
|---------|---------|--------------|
| **Algolia** | Investment search | Fast ranking, filtering, fuzzy matching |
| **Serper** | Document discovery | PDF-specific searches, date filtering |
| **Firecrawl** | Web scraping fallback | Professional content extraction, pagination support |

#### Communication
| Service | Purpose | Key Features |
|---------|---------|--------------|
| **Firebase Cloud Messaging** | Push notifications | Cross-platform, device management, bulk ops |
| **Slack** | Team notifications | Webhook-based alerts |
| **SendGrid** | Email notifications | Transactional emails, newsletter delivery |

### Platform Architecture

**Backend:**
- Django 5.2 + Django REST Framework
- PostgreSQL database with Redis caching
- Huey task queue for background jobs
- Algolia search integration
- Server-Sent Events (SSE) for real-time streaming

**Frontend:**
- React 17 + TypeScript 4.9
- Chakra UI design system
- React Query for state management
- Vite build system
- Capacitor v6 for native mobile apps

**Infrastructure:**
- Hosted on Render (web services, Postgres, Redis)
- CI/CD with automated testing and deployment
- Sentry for error tracking
- PostHog for product analytics

---

## Unique Differentiators

### What Sets Bloom Apart?

1. **AI Research Assistant with 28 Specialized Tools**
   Unlike competitors with basic chatbots, Bloom's AI can search earnings transcripts, filter stocks by fundamentals, analyze portfolio holdings, generate investment catalysts, and fetch live web content. It's like having a Bloomberg Terminal analyst available 24/7.

2. **MCP Server Integration for Claude Desktop**
   Bloom is one of the first investment platforms with full Model Context Protocol (MCP) support, enabling Claude Desktop users to access 13 investment research tools directly from their AI assistant—no browser needed.

3. **Curated, Not Overwhelming**
   Most platforms bury you in data. Bloom curates what matters: key events for YOUR stocks, daily investment ideas with reasoning, and personalized market digests.

4. **Premium Data at Consumer Prices**
   Access institutional-grade data sources (AlphaVantage, IEX, Benzinga, EOD) and AI models (GPT-4, Claude) at a fraction of Bloomberg Terminal's $24,000/year cost.

5. **Beautiful, Mobile-First Design**
   Native iOS and Android apps with dark mode, smooth animations, and intuitive navigation. Designed for investors who want powerful tools without the complexity.

6. **Open Architecture**
   Fully documented API, MCP server integration, and transparent AI reasoning. Power users can extend Bloom with custom tools and integrations.

---

## Feature Deep Dives

### AI Chat Agent: Your Personal Research Analyst

**28 Tools at Your Command:**

#### Core Research Tools (3)
- `get_symbols_metadata` - Comprehensive stock metadata, financials, ratings
- `research_stock` - Fundamental analysis with investment ratings
- `analyze_earnings` - Earnings analysis with estimates and catalysts

#### Advanced Research (3)
- `analyze_technicals` - Technical indicators, chart patterns, options flows
- `search_transcript` - Keyword search in earnings call transcripts
- `get_symbol_charts` - Interactive price charts across timeframes

#### Market & Sentiment (2)
- `get_market_sentiment` - Unified sentiment analysis from multiple sources
- `fetch_url_content` - Fetch and analyze web content with AI summarization

#### Portfolio Tools (3)
- `analyze_portfolio` - Portfolio review with buy/sell/hold recommendations
- `filter_stocks` - Screen stocks by fundamental criteria
- `analyze_trades` - Trade quality analysis for buy/sell decisions

#### Collections & Reports (2)
- `present_collection_cards` - Curated stock collections (Top Momentum, Dividend Aristocrats)
- `get_all_research_reports` - Recent AI-generated research reports

#### Web Search (1)
- `search_web` - Real-time web search for investment information

**Example Workflows:**

**Workflow 1: Deep Stock Research**
```
User: "Should I invest in Nvidia at current prices?"

Bloom Agent:
1. Calls get_symbols_metadata(["NVDA"]) for current price and fundamentals
2. Calls analyze_earnings("NVDA") for earnings trends and guidance
3. Calls analyze_technicals("NVDA") for chart patterns and momentum
4. Calls search_transcript("NVDA", ["guidance", "data center"]) for management commentary
5. Synthesizes insights and provides recommendation with reasoning
```

**Workflow 2: Portfolio Analysis**
```
User: "Review my portfolio: 40% AAPL, 30% GOOGL, 20% MSFT, 10% TSLA"

Bloom Agent:
1. Calls analyze_portfolio with holdings dict
2. Analyzes sector concentration (80% tech)
3. Assesses correlation and diversification
4. Provides rebalancing suggestions
5. Identifies risks and opportunities
```

**Workflow 3: Stock Screening**
```
User: "Find undervalued tech stocks with revenue growth over 20%"

Bloom Agent:
1. Calls filter_stocks with expressions: ["sector = Technology", "revenue growth > 20%", "P/E < 15"]
2. Returns list of matching stocks
3. Calls get_symbols_metadata for top candidates
4. Summarizes results with investment theses
```

---

### Portfolio Generation & Analysis

**AI-Powered Portfolio Builder**

Users can request custom portfolios based on investment goals, and Bloom's AI generates optimal allocations:

**Example Prompt:** "Create a $50,000 growth portfolio focused on AI and cloud computing"

**Bloom Response:**
- 5-10 stock allocations with percentages
- Investment thesis for each holding
- Risk assessment and diversification analysis
- Expected returns and volatility estimates
- Rebalancing recommendations

**Backtesting Support:**
- Historical performance analysis for any portfolio
- Risk-adjusted returns (Sharpe ratio, max drawdown)
- Comparison vs S&P 500 benchmark
- Monte Carlo simulations for future projections

---

### MCP Server: Claude Desktop Integration

**What is MCP?**
Model Context Protocol (MCP) is Anthropic's standard for connecting AI assistants to external tools and data sources. Bloom's MCP server enables Claude Desktop users to access investment research tools directly.

**13 Available MCP Tools:**
1. `get_symbols_metadata` - Stock metadata and fundamentals
2. `search_transcript` - Earnings transcript search
3. `analyze_earnings` - Earnings analysis
4. `generate_catalysts` - 1-year and 3-year investment catalysts
5. `analyze_technicals` - Technical analysis with charts
6. `get_market_sentiment` - Market sentiment indicators
7. `analyze_portfolio` - Portfolio review and recommendations
8. `filter_stocks` - Fundamental stock screening
9. `analyze_trades` - Trade quality analysis
10. `present_collection_cards` - Curated stock collections
11. `get_all_research_reports` - AI research reports
12. `search_web` - Web search for investment info
13. `fetch_url_content` - URL content extraction

**Setup:**
Users connect Claude Desktop to Bloom's MCP server via JSON configuration, enabling seamless access to investment research within Claude's interface.

**Use Case:** Power users can leverage Claude's conversational AI with Bloom's investment data—ideal for advanced research workflows and custom analysis.

---

## Use Cases & User Stories

### Story 1: The Busy Professional

**Profile:** Sarah, 35, Software Engineer, $150k income, wants to invest but has limited time

**Challenge:** Sarah wants to grow wealth through stocks but doesn't have hours to research. She's overwhelmed by financial news and doesn't know where to start.

**How Bloom Helps:**
- Opens Bloom mobile app during morning commute
- Reviews "Daily Investment Ideas" with AI-generated reasoning
- Adds interesting stocks to watchlist for further research
- Asks AI assistant: "Compare Tesla vs BYD for EV exposure"
- Gets comprehensive analysis in 30 seconds
- Makes informed investment decision before arriving at work

**Result:** Sarah invests confidently in 15 minutes vs 2+ hours of manual research

---

### Story 2: The Active Trader

**Profile:** Mike, 42, Day Trader, trades options and momentum stocks

**Challenge:** Mike needs real-time technical analysis, earnings insights, and unusual options activity to time entries and exits.

**How Bloom Helps:**
- Monitors watchlist for significant price movements
- Gets "Why It's Moving" notifications for tracked stocks
- Checks technical analysis with RSI, Bollinger bands, and volume
- Reviews earnings transcript excerpts for guidance keywords
- Analyzes unusual options flows for institutional positioning
- Sets alerts for key support/resistance levels

**Result:** Mike makes data-driven trades with institutional-grade tools at consumer prices

---

### Story 3: The Long-Term Investor

**Profile:** James, 58, Approaching Retirement, $800k portfolio, conservative risk tolerance

**Challenge:** James wants to ensure his portfolio is properly diversified and not overexposed to any sector or risk factor before retirement.

**How Bloom Helps:**
- Inputs current portfolio holdings into AI assistant
- Receives detailed portfolio analysis:
  - Sector concentration (flagged 45% tech exposure as high)
  - Correlation matrix (identified correlated holdings)
  - Risk assessment (rated portfolio as "moderate-high" risk)
  - Rebalancing suggestions (recommended defensive additions)
- Reviews suggested defensive stocks from "Dividend Aristocrats" collection
- Gradually rebalances portfolio over 3 months
- Sets up key event notifications for all holdings

**Result:** James reduces portfolio risk while maintaining growth potential, with peace of mind before retirement

---

## Platform Availability Matrix

| Feature | Web App | iOS App | Android App |
|---------|---------|---------|-------------|
| **AI Chat Assistant** | ✅ | ✅ | ✅ |
| **Daily Investment Ideas** | ✅ | ✅ | ✅ |
| **Market Digests** | ✅ | ✅ | ✅ |
| **Watchlist Tracking** | ✅ | ✅ | ✅ |
| **Stock Charts** | ✅ | ✅ | ✅ |
| **Earnings Transcripts** | ✅ | ✅ | ✅ |
| **Technical Analysis** | ✅ | ✅ | ✅ |
| **Portfolio Generation** | ✅ | ✅ | ✅ |
| **Portfolio Backtesting** | ✅ | ✅ | ✅ |
| **Push Notifications** | ❌ | ✅ | ✅ |
| **Dark Mode** | ✅ | ✅ | ✅ |
| **Offline Support** | Limited | ✅ | ✅ |
| **MCP Server Access** | N/A | N/A | N/A |

**Mobile App Features:**
- Native iOS and Android apps built with Capacitor
- Touch-optimized interface with gesture navigation
- Push notifications for key events and price alerts
- Offline support for recently viewed stocks
- Biometric authentication (Face ID, fingerprint)
- Share sheets for stock insights
- Deep linking support

---

## Messaging Framework

### Primary Tagline
**"AI-Powered Investment Research for Everyone"**

### Alternative Taglines
- "Make Smarter Investment Decisions with AI"
- "Your Personal Investment Research Analyst"
- "Institutional-Grade Research at Consumer Prices"
- "Invest with Confidence, Powered by AI"

### Elevator Pitch (30 seconds)
"Bloom is an investment research platform that combines AI-powered analysis with institutional-grade data to help individual investors make smarter decisions. Ask our AI assistant any investment question and get comprehensive analysis backed by real-time data, earnings transcripts, and technical indicators. With daily curated stock picks, personalized market digests, and beautiful portfolio tracking—all on web and mobile—Bloom turns hours of research into minutes."

### Value Propositions

**For Individual Investors:**
- Access professional-grade research tools without paying thousands per year
- Get AI-powered insights that would normally require a team of analysts
- Stay informed without information overload

**For Active Traders:**
- Make faster, data-driven decisions with real-time analysis
- Access technical indicators, earnings insights, and options flows in one place
- Set up custom alerts for key events and price movements

**For Portfolio Managers:**
- Analyze portfolio risk, correlation, and diversification instantly
- Get AI-powered rebalancing recommendations
- Backtest strategies before committing capital

### Key Messaging Points

1. **AI That Actually Understands Investing**
   "Our AI isn't just a chatbot—it has 28 specialized tools for analyzing stocks, reading earnings transcripts, screening fundamentals, and generating investment ideas. It's trained on financial data and built by investors, for investors."

2. **Curated Intelligence, Not Information Overload**
   "We don't dump 100 news headlines on you. Bloom curates what matters: key events for YOUR stocks, daily investment ideas with reasoning, and personalized market updates."

3. **Premium Data at Consumer Prices**
   "Get access to the same data sources used by hedge funds and investment banks (AlphaVantage, IEX, Benzinga) at a fraction of Bloomberg Terminal's $24,000/year cost."

4. **Built for Mobile-First Investors**
   "Research stocks during your commute, review portfolios from your couch, get push notifications for key events. Beautiful native iOS and Android apps designed for modern investors."

5. **Open and Extensible**
   "Power users can connect Bloom to Claude Desktop via MCP, access our documented API, and extend the platform with custom tools. No vendor lock-in."

---

## Competitive Positioning

### How Bloom Compares

| Feature | Bloom | Robinhood | Yahoo Finance | Bloomberg Terminal |
|---------|-------|-----------|---------------|-------------------|
| **AI Chat Assistant** | ✅ 28 tools | ❌ | ❌ | Limited |
| **Daily Investment Ideas** | ✅ AI-curated | ❌ | ❌ | ✅ Analyst reports |
| **Earnings Transcript Search** | ✅ Keyword search | ❌ | ❌ | ✅ |
| **Technical Analysis** | ✅ Free | ❌ | Limited | ✅ |
| **Portfolio Analysis** | ✅ AI-powered | Basic | ❌ | ✅ |
| **Mobile Apps** | ✅ Native iOS/Android | ✅ | ✅ | ❌ |
| **Push Notifications** | ✅ Key events | ✅ Price alerts | ✅ | ✅ |
| **MCP Server Integration** | ✅ | ❌ | ❌ | ❌ |
| **Price** | $15/month* | Free (trading fees) | Free | $24,000/year |

*Pricing is illustrative

### Why Choose Bloom Over...

**vs Robinhood/E*TRADE/Webull:**
- Bloom focuses on research, not trading execution
- AI-powered insights vs basic charts
- Institutional data sources vs retail feeds
- No conflicts of interest from order flow

**vs Yahoo Finance/Google Finance:**
- AI assistant with 28 specialized tools vs basic search
- Curated investment ideas vs generic news
- Portfolio analysis vs simple tracking
- Native mobile apps vs mobile web

**vs Bloomberg Terminal/FactSet:**
- Consumer pricing ($15/mo vs $24,000/year)
- Modern, intuitive interface vs complex terminals
- Mobile-first design vs desktop-only
- AI-powered vs manual research

**vs Seeking Alpha/Motley Fool:**
- AI analysis vs human opinion pieces
- Real-time data vs articles with lag
- Customizable tools vs one-size-fits-all content
- Portfolio analysis vs just stock picks

---

## Call-to-Action Messaging

### Homepage CTA
**"Start Researching Smarter"**
*Sign up free and ask your first investment question*

### Pricing Page CTA
**"Invest in Better Research"**
*Join thousands of investors making smarter decisions with AI*

### Mobile App Store Description
**"AI-Powered Investment Research in Your Pocket"**
*Download Bloom and get instant access to institutional-grade research tools, daily stock picks, and personalized market digests. Ask any investment question and get AI-powered analysis backed by real-time data.*

---

## Technical Innovation Highlights

### For Technical Audiences

**Cutting-Edge AI Stack:**
- Multi-model AI architecture with GPT-4, Claude Sonnet, and Llama 3.3 70B
- Real-time streaming responses with Server-Sent Events (SSE)
- Semantic search with vector embeddings
- LLM-as-a-judge testing with DeepEval

**Modern Full-Stack Platform:**
- React + TypeScript frontend with Vite build system
- Django 5.2 backend with async ORM support
- PostgreSQL + Redis for performance and caching
- Huey task queue for background jobs
- Native mobile apps with Capacitor v6

**Developer-Friendly:**
- Fully documented REST API (80+ endpoints)
- MCP server for Claude Desktop integration (13 tools)
- Open-source testing frameworks
- CI/CD with automated testing and deployment

---

## Summary: Why Bloom?

Bloom empowers individual investors with AI-powered research tools previously available only to institutions. Whether you're researching stocks, building portfolios, or staying informed on market movements, Bloom delivers actionable insights in minutes instead of hours.

**Four core features:**
1. AI research assistant with 28 specialized tools
2. Daily investment ideas with clear reasoning
3. Curated market digests for your tracked stocks
4. Simple, beautiful watchlist and portfolio tracking

**Available on web, iOS, and Android** with seamless sync, push notifications, and dark mode support.

**Powered by premium data sources** (AlphaVantage, IEX, Benzinga) and advanced AI models (GPT-4, Claude, Llama) at consumer prices.

**Built for modern investors** who want institutional-grade research without the complexity or cost of legacy platforms.

---

## Contact & Resources

**Website:** investwithbloom.com
**GitHub:** Bloom-Invest/bloom-frontend
**Documentation:** Available in `/specs/` directory
**MCP Server:** Available for Claude Desktop users
**Support:** Email or in-app feedback

---

*Last Updated: January 2025*
*Version: 1.0*
