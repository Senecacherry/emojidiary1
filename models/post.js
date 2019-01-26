module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
        resultsOne: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsOneDes: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsTwo: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsTwoDes: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsThree: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        resultsThreeDes: {
            type: DataTypes.STRING,
            allowNull: false,

        }

    });
    return Post;
};