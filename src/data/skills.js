/**
 * Technical Skills Data
 * Honest, beginner-friendly, and structured for interactive exploration.
 * No fake percentages or claimed advanced proficiency.
 */

export const skillsData = [
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "Spreadsheets & Analysis",
    badge: "Foundational & Essential",
    shortDescription: "Data organization, statistical functions, dynamic Pivot Tables, and business calculations.",
    brandColor: "#107c41",
    accentGlow: "rgba(16, 124, 65, 0.25)",
    tagBg: "rgba(16, 124, 65, 0.12)",
    icon: "FileSpreadsheet",
    topics: [
      "Data cleaning & deduplication",
      "Formulas & functions (VLOOKUP, XLOOKUP, INDEX/MATCH)",
      "Data organization & formatting",
      "Pivot Tables & Pivot Charts",
      "Data analysis & summary reporting",
      "Conditional formatting & data validation"
    ],
    currentFocus: 
      "Currently practicing complex lookup combinations, automated summary sheets, and designing executive-ready spreadsheet layouts.",
    practicalApplication: 
      "Transforming messy raw operational records into organized, validated tables with automated summary metrics for quick decision-making.",
    sampleSnippet: {
      type: "formula",
      label: "Sample XLOOKUP & Conditional Formula",
      code: `=IFERROR(\n  XLOOKUP(A2, Products!A:A, Products!D:D, "Not Found"),\n  0\n)`
    }
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Business Intelligence",
    badge: "Visual Reporting",
    shortDescription: "Interactive dashboards, Power Query data transformation, DAX metrics, and visual storytelling.",
    brandColor: "#f2c811",
    accentGlow: "rgba(242, 200, 17, 0.25)",
    tagBg: "rgba(242, 200, 17, 0.12)",
    icon: "BarChart3",
    topics: [
      "Interactive dashboards",
      "Data visualization & design",
      "Power Query transformations",
      "DAX fundamentals (CALCULATE, SUM, RELATED)",
      "Business reporting & KPI tracking",
      "Relationships & star schema basics"
    ],
    currentFocus: 
      "Exploring dynamic time-intelligence measures in DAX, building interactive slicers, and crafting clean, accessible dashboard layouts.",
    practicalApplication: 
      "Connecting multiple tables, cleaning data in Power Query, and building intuitive dashboards where business managers can filter by region, product, and date.",
    sampleSnippet: {
      type: "dax",
      label: "Sample DAX Calculated Measure",
      code: `Total Profit Margin % =\nDIVIDE(\n  SUM(Sales[Profit]),\n  SUM(Sales[Revenue]),\n  0\n)`
    }
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Relational Databases",
    badge: "Querying & Data Extraction",
    shortDescription: "Structured SQL queries, filtering, joins, aggregations, and relational database fundamentals.",
    brandColor: "#00758f",
    accentGlow: "rgba(0, 117, 143, 0.25)",
    tagBg: "rgba(0, 117, 143, 0.12)",
    icon: "Database",
    topics: [
      "SQL queries & syntax",
      "SELECT statements",
      "Filtering & sorting (WHERE, ORDER BY, LIMIT)",
      "Joins (INNER, LEFT, RIGHT)",
      "Aggregate functions (COUNT, SUM, AVG, GROUP BY)",
      "Database fundamentals & schemas"
    ],
    currentFocus: 
      "Practicing multi-table joins, subqueries, and grouping logic on e-commerce transaction databases to calculate key business metrics.",
    practicalApplication: 
      "Extracting answers to business questions like 'Which customer segment spent the most last quarter?' directly from relational tables.",
    sampleSnippet: {
      type: "sql",
      label: "Sample Aggregation & Join Query",
      code: `SELECT \n  c.category_name,\n  COUNT(o.order_id) AS total_orders,\n  ROUND(SUM(o.amount), 2) AS total_revenue\nFROM orders o\nJOIN categories c ON o.category_id = c.id\nGROUP BY c.category_name\nORDER BY total_revenue DESC;`
    }
  },
  {
    id: "python",
    name: "Python",
    category: "Programming & Analytics",
    badge: "Data Logic & Exploration",
    shortDescription: "Python fundamentals, data structures, conditional logic, loops, and basic problem solving.",
    brandColor: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.25)",
    tagBg: "rgba(56, 189, 248, 0.12)",
    icon: "Code2",
    topics: [
      "Python fundamentals",
      "Variables & data types",
      "Conditional statements (if/elif/else)",
      "Loops (for, while, list comprehensions)",
      "Lists, tuples, dictionaries & sets",
      "Basic problem-solving & data parsing"
    ],
    currentFocus: 
      "Strengthening fundamental programming logic and exploring Python libraries like Pandas for data exploration and file manipulation.",
    practicalApplication: 
      "Writing reusable scripts to read CSV records, clean missing values, calculate descriptive statistics, and automate repetitive tasks.",
    sampleSnippet: {
      type: "python",
      label: "Sample Data Aggregation Function",
      code: `def calculate_summary(records):\n    total_sales = sum(r['amount'] for r in records)\n    avg_sale = total_sales / len(records) if records else 0\n    return {\n        'count': len(records),\n        'total': round(total_sales, 2),\n        'average': round(avg_sale, 2)\n    }`
    }
  }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "Spreadsheets & Analysis", label: "Spreadsheets" },
  { id: "Business Intelligence", label: "Business Intelligence" },
  { id: "Relational Databases", label: "Databases" },
  { id: "Programming & Analytics", label: "Programming" },
];
