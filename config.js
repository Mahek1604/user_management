//external import
const convict = require("convict");
const password = encodeURIComponent("Mahek@123");

let config = convict({
  server: {
    enableHttpLogging: {
      doc: "Enable HTTP Logging",
      format: Boolean,
      default: true
    }
  },
  mongodb: {
    connectionUrl:
      "mongodb+srv://mahekmehta17:admin@cluster0.geceecb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    database: {
      doc: "user info database",
      format: String,
      default: "user_management_system"
    },
    collection: {
      user: {
        doc: "user details collection",
        format: String,
        default: "user"
      }
    }
  },
  maxAge: {
    doc: "Maximum age of a session, Default: 30 minutes",
    format: Number,
    default: 30 * 60 * 1000
  }
});

module.exports = config;