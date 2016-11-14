function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`.trim()
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            let result = super.toString() + '\n'
            result += `Rating: ${this.likes - this.dislikes}\n`
            if (this.comments.length > 0) {
                result += 'Comments:\n';
                for (let comment of this.comments) {
                    result += ` * ${comment}\n`
                }
            }

            return result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString() {
            let result = super.toString() + '\n';
            result += `Views: ${this.views}\n`

            return result.trim()
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let p = solve()
let post = new p.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new p.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
