using System.ComponentModel;
using System.Windows;

namespace MCVPlugin
{
    /// <summary>
    /// Window1.xaml の相互作用ロジック
    /// </summary>
    public partial class Window1 : Window
    {
        public Window1()
        {
            InitializeComponent();
            _isForceClose = false;
        }
        protected override void OnClosing(CancelEventArgs e)
        {
            if (!_isForceClose)
            {
                e.Cancel = true;
                Visibility = Visibility.Hidden;
            }
            base.OnClosing(e);
        }
        /// <summary>
        /// アプリの終了時にtrueにしてCloseを呼ぶとViewがCloseされる
        /// </summary>
        bool _isForceClose;
        /// <summary>
        /// Viewを閉じる。Close()は非表示になるようにしてある。
        /// </summary>
        public void ForceClose()
        {
            _isForceClose = true;
            this.Close();
        }
    }
}
