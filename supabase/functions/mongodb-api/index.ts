import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const MONGODB_CONNECTION_STRING = Deno.env.get('MONGODB_CONNECTION_STRING');
  if (!MONGODB_CONNECTION_STRING) {
    return new Response(JSON.stringify({ error: 'MONGODB_CONNECTION_STRING not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    // For now, return mock data. MongoDB Atlas Data API integration
    // can be added when you have the Atlas Data API endpoint configured.
    // The connection string is stored securely for future direct driver usage.
    
    if (action === 'list-orders') {
      return new Response(JSON.stringify({
        orders: [
          { id: "ORD-001", device: "iPhone 15 Pro", customer: "Rahul Sharma", price: 45000, status: "Completed", date: "2026-04-03", type: "sell" },
          { id: "ORD-002", device: "MacBook Air M3", customer: "Priya Singh", price: 55000, status: "Pickup Scheduled", date: "2026-04-03", type: "sell" },
        ],
        total: 2,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'create-order' && req.method === 'POST') {
      const body = await req.json();
      return new Response(JSON.stringify({
        success: true,
        orderId: `ORD-${Date.now()}`,
        message: 'Order created successfully',
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'stock') {
      return new Response(JSON.stringify({
        message: 'Stock endpoint ready. Connect MongoDB Atlas Data API for live data.',
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action. Use ?action=list-orders|create-order|stock' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
