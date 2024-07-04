rm -rf runtipi-appstore
git clone https://github.com/runtipi/runtipi-appstore.git
rsync -avz runtipi-appstore/* .

git checkout -- apps/2fauth
git checkout -- apps/big-bear-genmon
git checkout -- apps/big-bear-plant-it
