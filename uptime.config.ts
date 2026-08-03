// UptimeFlare config - escsn status page
// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "escsn's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://blog.septa.dpdns.org/', label: 'Blog', highlight: true },
    { link: 'https://github.com/snsmacher', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Blog HTTP monitor
    {
      id: 'blog_monitor',
      name: '博客 escsn',
      method: 'GET',
      target: 'https://blog.septa.dpdns.org/',
      tooltip: '我的博客（flare-stack-blog）',
      statusPageLink: 'https://blog.septa.dpdns.org/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // Blog MCP endpoint monitor
    {
      id: 'blog_mcp_monitor',
      name: '博客 MCP 端点',
      method: 'GET',
      target: 'https://blog.septa.dpdns.org/mcp',
      tooltip: '博客 MCP API 端点',
      statusPageLink: 'https://blog.septa.dpdns.org/mcp',
      expectedCodes: [401],
      timeout: 10000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    webhook: {
      url: 'https://your-webhook-url-here',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      payloadType: 'json',
      payload: {
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

