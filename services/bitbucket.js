'use strict';

/*
 * verify the sender of the hook
 */
function verify(data, callback) {
    // verify sender: 131.103.20.165 and 131.103.20.166
    callback(null);
}

/* 
 * extract the data
 */
function extract(data, callback) {

    // extract commit messages
    var commits = [];
    for (var i = 0, l = data.commits.length; i < l; i++) {
        var dcommit = data.commits[i];
        var commit = {
            'author': {
                'email': '',
                'name': dcommit.author.name,
                'username': ''
            },
            'message': dcommit.message,
            'timestamp' : dcommit.timestamp,
            'url' : ''
        };
        commits.push(commit);
    }

    var eventData = {
        'type': 'push',
        'repo': {
            'name': data.repository.name,
            'owner': data.repository.owner
        },
        'commits': commits,
        'raw': data
    };

    callback(null, eventData);
}

module.exports = {
    'verify': verify,
    'extract': extract
};