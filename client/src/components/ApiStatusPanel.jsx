import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RefreshCw, Server, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';

export const ApiStatusPanel = () => {
  const [serverStatus, setServerStatus] = useState({
    loading: false,
    connected: false,
    data: null,
    error: null,
  });

  const checkBackendHealth = async () => {
    setServerStatus(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await axios.get('/api/health');
      setServerStatus({
        loading: false,
        connected: true,
        data: response.data,
        error: null,
      });
    } catch (err) {
      setServerStatus({
        loading: false,
        connected: false,
        data: null,
        error: err.message || 'Server not reachable yet',
      });
    }
  };

  useEffect(() => {
    checkBackendHealth();
  }, []);

  return (
    <Card hoverable={false} className="p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Backend Health & API Status</h3>
              {serverStatus.connected ? (
                <Badge variant="success" icon={CheckCircle2}>Online</Badge>
              ) : (
                <Badge variant="warning" icon={AlertCircle}>Standby</Badge>
              )}
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Target endpoint: <code className="px-2 py-0.5 rounded bg-white/5 text-indigo-300 font-mono text-xs">GET /api/health</code> (proxied to port 5000)
            </p>
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="sm" 
          onClick={checkBackendHealth} 
          disabled={serverStatus.loading}
          icon={RefreshCw}
        >
          {serverStatus.loading ? 'Checking...' : 'Ping Server'}
        </Button>
      </div>

      <div className="mt-6">
        <div className="rounded-xl bg-slate-950/80 border border-white/5 p-4 font-mono text-xs overflow-x-auto">
          {serverStatus.loading && (
            <span className="text-slate-400 animate-pulse">Pinging backend endpoint...</span>
          )}
          {!serverStatus.loading && serverStatus.connected && (
            <pre className="text-emerald-400 leading-relaxed">
              {JSON.stringify(serverStatus.data, null, 2)}
            </pre>
          )}
          {!serverStatus.loading && !serverStatus.connected && (
            <div className="space-y-2 text-amber-300/90">
              <p>⚡ Backend server is in standby. Start it using <code className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">npm run server</code> or <code className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">npm run dev</code>.</p>
              {serverStatus.error && (
                <p className="text-rose-400 text-[11px]">Notice: {serverStatus.error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
