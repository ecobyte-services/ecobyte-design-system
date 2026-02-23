export default {
	async fetch(request: Request, env: any): Promise<Response> {
		// Assets are served automatically by the [assets] binding
		// This worker handles any non-asset requests (e.g. API routes in the future)
		return new Response('Not Found', { status: 404 });
	},
};
