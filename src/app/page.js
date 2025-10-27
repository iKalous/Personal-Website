import './globals.css'
import profileData from '../data/profile.json'

export default function Home() {
    return (
        <div className="container">
            <div className="main-section">
                {/* 个性板块 - 左边80% */}
                <div className="profile-section">
                    <div className="profile-header">
                        <img
                            src={profileData.avatar}
                            alt="头像"
                            className="avatar"
                        />
                        <div className="profile-info">
                            <h1>Welcome</h1>
                            <p className="signature">{profileData.signature}</p>
                        </div>
                    </div>
                    <div className="bio">
                        <p>{profileData.bio}</p>
                    </div>
                </div>

                {/* 链接板块 - 右边20% */}
                <div className="links-section">
                    <div className="links-card">
                        <h2>Links</h2>
                        <a href={`mailto:${profileData.links.email}`} className="link-item">
                            📧 Email
                        </a>
                        <a href={profileData.links.github} target="_blank" rel="noopener noreferrer" className="link-item">
                            🐙 GitHub
                        </a>
                        <a href={profileData.links.gitee} target="_blank" rel="noopener noreferrer" className="link-item">
                            🌟 Gitee
                        </a>
                        <a href={profileData.links.gitlab} target="_blank" rel="noopener noreferrer" className="link-item">
                            🦊 GitLab
                        </a>
                        <a href={profileData.links.blog} target="_blank" rel="noopener noreferrer" className="link-item">
                            📝 Blog
                        </a>
                    </div>

                    {profileData.friendLinks && profileData.friendLinks.length > 0 && (
                        <div className="links-card">
                            <h2>Friends</h2>
                            {profileData.friendLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-item"
                                >
                                    🔗 {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 研究板块 - 底部 */}
            <div className="research-section">
                <h2>Research</h2>
                <div className="research-placeholder">
                    Coming soon...
                </div>
            </div>
        </div>
    )
}
