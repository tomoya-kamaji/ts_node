import { initApiEngine } from './presentation/api_engine'
import { initRoute } from './presentation/route'

async function main() {
  const app = initApiEngine()
  initRoute(app)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
