using Plugin;
using SitePlugin;
using System.ComponentModel.Composition;
using System;

namespace MCVPlugin
{
    [Export(typeof(IPlugin))]
    public class Plugin : IPlugin, IDisposable
    {

        public string Name { get { return "コメントジェネレータープラグイン"; } }
        public string Description { get { return "コメントジェネレーター連携のためのプラグイン"; } }
        public IPluginHost Host { get; set; }

        public virtual void OnLoaded()
        {

        }

        public void OnClosing()
        {

        }

        public void OnMessageReceived(ISiteMessage message, IMessageMetadata messageMetadata)
        {

        }

        Window1? _window;
        public void OnTopmostChanged(bool isTopmost)
        {


        }

        public void ShowSettingView()
        {
            if (_window == null)
            {
                _window = new Window1();
            }
            _window.Show();
        }

        public void Dispose()
        {
            Dispose(true);
        }

        protected virtual void Dispose(bool disposing)
        {

        }

    }
}