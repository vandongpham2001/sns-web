#!/usr/bin/env bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex='^((feat|feedback|hotfix|revert|reset|force|refactor|fix)\/[a-zA-Z0-9\-]+)$'

if [ "$local_branch_name" != "develop" ] && [ "$local_branch_name" != "staging" ] && [ "$local_branch_name" != "release" ] && [ "$local_branch_name" != "test" ] && ! echo "$local_branch_name" | grep -Eq "$valid_branch_regex"; then
    echo "Error: Invalid branch name - $local_branch_name does not match the expected pattern: $valid_branch_regex"
    exit 1
fi

exit 0