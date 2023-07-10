import os

## yo yo yo Mike
#################


print('Entering Python_-_-_-_-Hello From Python!')

print('\t\tPYTHON-START')
save = input('\nDo any files changes need to be ADDED? [y,n]: ')
if (save == 'y'):
    os.system('git add . && clear && git status')
    backup = ''
    while backup != 'n':
        backup = input('\nNeed to save again? [y,n]: ')
        if (backup == 'y'):
            os.system('git add . && clear && git status')
    commit = input('\nDo you want to COMMIT & PUSH these saved changes? [y,n]: ')
    if (commit == 'y'):
        message = input('\nPlease enter COMMIT MESSAGE [Free text]: ')
        os.system(f"git commit -m '{message}' && git push")
        os.system("clear && neofetch") 
        print('\nChanges have been saved, commited, and pushed to Github Repo.')
elif (save == 'n'):
    os.system('clear && echo "No changes made to branch"')



print('\t\tPYTHON-END\n\nLeaving Python...')
