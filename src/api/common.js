const HP = window.$http;

//api接口文档 https://cnodejs.org/api

/**
 *  得到列表数据
 *
 * @param {*} data
 */
const getTopics = data => HP.get('/topics', data);

/**
 *  得到主题详情
 *
 * @param {*} data
 */
const getTopicDetails = data => HP.get(`/topic/${data.id}`, data);

/**
 *  新建主题
 *
 * @param {*} data
 */
const newTopic = data => HP.post('/topics', data);

/**
 *  编辑主题
 *
 * @param {*} data
 */
const updateTopic = data => HP.post('/topics/update', data);

/**
 *  主题收藏
 *
 * @param {*} data
 */
const collectTopic = data => HP.post('/topic_collect/collect', data);

/**
 *  取消主题
 *
 * @param {*} data
 */
const delCollectTopic = data => HP.post('/topic_collect/de_collect', data);

/**
 *  得到用户收藏主题
 *
 * @param {*} data
 */
const getCollectTopic = data => HP.get(`/topic_collect/${data}`);

/**
 *  新建评论
 *
 * @param {*} topicId
 * @param {*} data
 */
const newReplies = (topicId, data) =>
  HP.post(`/topic/${topicId}/replies`, data);

/**
 *  得到用户信息
 *
 * @param {*} name
 */
const getUserData = name => HP.get(`/user/${name}`);

/**
 *  消息通知
 *
 * @param {*} data
 */
const getMsgCount = data => HP.get('/message/count', data);

/**
 *  取已读和未读消息
 *
 * @param {*} data
 */
const getMsg = data => HP.get('/messages', data);

/**
 *  标记全部已读
 *
 * @param {*} data
 */
const markMsgAll = data => HP.post('/message/mark_all', data);

/**
 *  标记单个消息为已读
 *
 * @param {*} msgId
 * @param {*} data
 */
const markMsgOne = (msgId, data) => HP.post(`/message/mark_one/${msgId}`, data);

export default {
  getTopics,
  getTopicDetails,
  newTopic,
  updateTopic,
  collectTopic,
  delCollectTopic,
  getCollectTopic,
  newReplies,
  getUserData,
  getMsgCount,
  getMsg,
  markMsgAll,
  markMsgOne
};
