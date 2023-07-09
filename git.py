import time
import os

## yo yo yo Mike
#################


print('Entering Python_-_-_-_-Hello From Python!')

print('\t\tPYTHON-START')
save = input('\nDo any files need to be saved?: ')
if (save == 'y'):
    os.system('git add . && clear && git status')
    backup = ''
    while backup != 'n':
        backup = input('Need to save again?: ')
        if (backup == 'y'):
            os.system('git add . && clear && git status')
elif (save == 'n'):
    os.system('clear && echo "No changes made to branch"')


print('\t\tPYTHON-END\nLeaving Python...')
