class Github {
    async getUser(user) {
        console.log(user);
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}
