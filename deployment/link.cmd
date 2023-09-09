
ln -s /etc/nginx/sites-available/fancodeparty.com.conf /etc/nginx/sites-enabled/
systemctl restart nginx


cd /var/www/multiSite/fancodeparty.com/
npm i 
npm run build

pm2 start npm --name "fancodeparty.com--8073" -- start
pm2 startup
pm2 save




pm2 restart all
